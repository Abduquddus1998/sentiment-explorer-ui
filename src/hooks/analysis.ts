import baseApi from "../api/base-api";
import { useQuery } from "@tanstack/react-query";

export interface HistoryItem {
  corpus: string;
  corpus_id: string;
}

interface AnalysisHistoryResponse {
  success: boolean;
  error: {
    message: string;
  };
  data: HistoryItem[];
}

export async function getAnalysisHistory(): Promise<AnalysisHistoryResponse> {
  return await baseApi.request("/analysis/history", "get", {}, true);
}

export const useHistory = () =>
  useQuery({
    queryKey: ["historyList"],
    queryFn: getAnalysisHistory,
  });
