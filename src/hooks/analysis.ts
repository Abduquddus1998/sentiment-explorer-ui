import baseApi from "../api/base-api";
import { useMutation, useQuery } from "@tanstack/react-query";

export interface HistoryItem {
  corpus: string;
  corpus_id: string;
}

interface AnalysisInfoParams {
  corpus_id: string;
}

interface AnalysisHistoryResponse {
  success: boolean;
  error: {
    message: string;
  };
  data: HistoryItem[];
}

export interface PiiLabels {
  id: string;
  corpus_id: string;
  token: string;
  label: string;
  prob: number;
}

export interface KeyPhrases {
  score: number;
  phrase: string;
}

export interface SentimentResponse {
  corpus: string;
  corpus_id: string;
  sentiment: string;
  prob: number;
  pii_labels: PiiLabels[];
  ner_labels: PiiLabels[];
  pos_labels: PiiLabels[];
  key_phrases: KeyPhrases[];
}

interface AnalysisInfoResponse {
  success: boolean;
  error: {
    message: string;
  };
  data: SentimentResponse;
}

interface SentimentParams {
  corpus: string;
}

export async function getAnalysisHistory(): Promise<AnalysisHistoryResponse> {
  return await baseApi.request("/analysis/history", "get", {}, true);
}

export const useHistory = () =>
  useQuery({
    queryKey: ["historyList"],
    queryFn: getAnalysisHistory,
  });

export async function getAnalysisInfo(
  params: AnalysisInfoParams
): Promise<AnalysisInfoResponse> {
  return await baseApi.request("/analysis/analysis-info", "post", params, true);
}

export const useAnalysisInfo = (id: string) =>
  useQuery({
    queryKey: ["analysisInfo", id],
    queryFn: ({ queryKey }) => {
      const [, corpus_id] = queryKey;
      return getAnalysisInfo({ corpus_id });
    },
  });

export async function generateSentimentInfo(
  params: SentimentParams
): Promise<AnalysisInfoResponse> {
  return await baseApi.request("/analysis/sentiment", "post", params, true);
}

export const useSentimentGenerator = () =>
  useMutation({
    mutationFn: generateSentimentInfo,
  });
