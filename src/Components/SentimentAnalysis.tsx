import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import Tabs from "./Tabs";
import Table from "./Table";

import { SentimentWrapper } from "./SentimentAnalysisStyle";

import {
  KeyPhrases,
  PiiLabels,
  SentimentResponse,
  useAnalysisInfo,
} from "../hooks/analysis";

export default function SentimentAnalysis() {
  const { id } = useParams<{ id: string }>();
  const { isPending, isError, data } = useAnalysisInfo(id!);

  const [currentTab, setCurrentTab] = useState<number>(0);

  useEffect(() => {
    if (id) {
      setCurrentTab(0);
    }
  }, [id]);

  const columns: string[] = ["token", "label", "prob"];
  const defaultData = {
    corpus: "",
    corpus_id: "",
    prob: 0,
    sentiment: "",
    pii_labels: [],
    ner_labels: [],
    pos_labels: [],
    key_phrases: [],
  };

  const {
    corpus,
    prob,
    sentiment,
    pii_labels,
    ner_labels,
    pos_labels,
    key_phrases,
  } = useMemo<SentimentResponse>(() => {
    if (!isPending && data) {
      return data.data;
    }

    return defaultData;
  }, [data, isPending]);

  const onSelectTab = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <SentimentWrapper>
      <textarea
        name="corpus"
        cols={30}
        rows={10}
        value={corpus}
        readOnly={true}
      />
      <Tabs currentTab={currentTab} onSelectTab={onSelectTab} />
      {currentTab === 0 && (
        <Table<{ sentiment: string; prob: number }>
          columns={["sentiment", "prob"]}
          rows={[{ sentiment, prob: Number(prob) }]}
        />
      )}

      {currentTab === 1 && (
        <Table<PiiLabels> columns={columns} rows={ner_labels} />
      )}

      {currentTab === 2 && (
        <Table<PiiLabels> columns={columns} rows={pii_labels} />
      )}

      {currentTab === 3 && (
        <Table<PiiLabels> columns={columns} rows={pos_labels} />
      )}

      {currentTab === 4 && (
        <Table<KeyPhrases> columns={["phrase", "score"]} rows={key_phrases} />
      )}
    </SentimentWrapper>
  );
}
