import { FC, SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement> & {
  color?: "#282828";
};

export const BagIcon: FC<Props> = ({ color = "#282828", className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      width="40"
      fill={color}
      className={className}
      viewBox="0 -960 960 960"
    >
      <path d="M264.615-120Q237-120 218.5-138.5 200-157 200-184.615v-430.77Q200-643 218.5-661.5 237-680 264.615-680H340v-20q0-58.308 40.846-99.154T480-840q58.308 0 99.154 40.846T620-700v20h75.385Q723-680 741.5-661.5 760-643 760-615.385v430.77Q760-157 741.5-138.5 723-120 695.385-120h-430.77Zm0-40h430.77q9.23 0 16.923-7.692Q720-175.385 720-184.615v-430.77q0-9.23-7.692-16.923Q704.615-640 695.385-640H620v100q0 8.538-5.731 14.269Q608.539-520 600-520t-14.269-5.731Q580-531.462 580-540v-100H380v100q0 8.538-5.731 14.269Q368.539-520 360-520t-14.269-5.731Q340-531.462 340-540v-100h-75.385q-9.23 0-16.923 7.692Q240-624.615 240-615.385v430.77q0 9.23 7.692 16.923Q255.385-160 264.615-160ZM380-680h200v-20q0-42.231-28.885-71.115Q522.231-800 480-800q-42.231 0-71.115 28.885Q380-742.231 380-700v20ZM240-160v-480 480Z" />
    </svg>
  );
};