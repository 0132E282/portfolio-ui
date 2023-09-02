import { EmotionCache } from "@emotion/cache";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export interface layoutPros {
    children: ReactNode
}
export type NextPageWidLayout = NextPage & {
    Layout?:(props : layoutPros) => ReactElement
}
export type AppPropsWithLayout = AppProps & {
    Component : NextPageWidLayout;
    emotionCache?: EmotionCache;
}