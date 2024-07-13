import { Fragment, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import Tabs from "./Tabs";
import Table from "./Table";
import { Spinner, SubmitButton } from "./LoginStyles";
import { AnalyzeWrapper, SentimentWrapper } from "./SentimentAnalysisStyle";

import {
  KeyPhrases,
  PiiLabels,
  SentimentResponse,
  useSentimentGenerator,
} from "../hooks/analysis";

export default function Main() {
  const queryClient = useQueryClient();
  const mutation = useSentimentGenerator();

  const [currentTab, setCurrentTab] = useState<number>(0);
  const [corpus, setCorpus] = useState("");
  const [sentimentInfo, setSentimentInfo] = useState<SentimentResponse>({
    corpus: "",
    corpus_id: "",
    prob: 0,
    sentiment: "",
    pii_labels: [],
    ner_labels: [],
    pos_labels: [],
    key_phrases: [],
  });

  const columns: string[] = ["token", "label", "prob"];

  const onSelectTab = (tab: number) => {
    setCurrentTab(tab);
  };

  const onSubmit = async () => {
    const { data, error } = await mutation.mutateAsync({ corpus });

    if (!error && data) {
      await queryClient.invalidateQueries({ queryKey: ["historyList"] });
      setSentimentInfo(data);
    }
  };

  return (
    <SentimentWrapper isMain={true}>
      <textarea
        name="corpus"
        cols={30}
        rows={10}
        onChange={(e) => setCorpus(e.target.value)}
        placeholder={"Enter text..."}
      />

      <AnalyzeWrapper>
        <SubmitButton
          onClick={onSubmit}
          isLogin={true}
          disabled={!!mutation.data}
        >
          {mutation.isPending ? <Spinner /> : <>Analyze</>}
        </SubmitButton>
      </AnalyzeWrapper>

      {!mutation.isPending && mutation.data && (
        <Fragment>
          <Tabs currentTab={currentTab} onSelectTab={onSelectTab} />

          {currentTab === 0 && (
            <Table<{ sentiment: string; prob: number }>
              columns={["sentiment", "prob"]}
              rows={[
                {
                  sentiment: sentimentInfo.sentiment,
                  prob: sentimentInfo.prob,
                },
              ]}
            />
          )}

          {currentTab === 1 && (
            <Table<PiiLabels>
              columns={columns}
              rows={sentimentInfo.ner_labels}
            />
          )}

          {currentTab === 2 && (
            <Table<PiiLabels>
              columns={columns}
              rows={sentimentInfo.pii_labels}
            />
          )}

          {currentTab === 3 && (
            <Table<PiiLabels>
              columns={columns}
              rows={sentimentInfo.pos_labels}
            />
          )}

          {currentTab === 4 && (
            <Table<KeyPhrases>
              columns={["phrase", "score"]}
              rows={sentimentInfo.key_phrases}
            />
          )}
        </Fragment>
      )}
    </SentimentWrapper>
  );
}
