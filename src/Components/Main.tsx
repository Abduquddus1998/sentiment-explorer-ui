import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { Spinner, SubmitButton } from "./LoginStyles";
import { AnalyzeWrapper, SentimentWrapper } from "./SentimentAnalysisStyle";

import { useSentimentGenerator } from "../hooks/analysis";

export default function Main() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useSentimentGenerator();

  const [corpus, setCorpus] = useState("");

  const onSubmit = async () => {
    const { data, error } = await mutation.mutateAsync({ corpus });

    if (!error && data) {
      await queryClient.invalidateQueries({ queryKey: ["historyList"] });

      navigate(`/main/analysis/${data.corpus_id}`);
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
        <SubmitButton onClick={onSubmit} isLogin={true} disabled={!corpus}>
          {mutation.isPending ? <Spinner /> : <>Analyze</>}
        </SubmitButton>
      </AnalyzeWrapper>
    </SentimentWrapper>
  );
}
