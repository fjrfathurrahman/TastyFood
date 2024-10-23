"use client";

import { Activity } from "@/components/fragments/Activity";
import { AmountData } from "@/components/fragments/AmountData";
import { BannerDasboard } from "@/components/fragments/BannerDasboard";
import { Statistics } from "@/components/fragments/Statistics";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <BannerDasboard />
      <AmountData />
      <Activity />
      <Statistics />

      <div>
        <small>
          Copyright &copy; {new Date().getFullYear()}, All rights reserved.
        </small>
      </div>
    </div>
  );
}
