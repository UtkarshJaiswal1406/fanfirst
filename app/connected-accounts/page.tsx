"use client";

import ConnectedAccounts from "@/components/connected-accounts";
import { Card } from "@/components/ui/card";

export default function ConnectedAccountsPage() {
  return (
    <div className="container py-8 max-w-5xl mx-auto">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Connected Accounts</h1>
          <p className="text-muted-foreground mt-2">
            Manage your connected streaming services and social media accounts
          </p>
        </div>
        <Card className="p-6 bg-card border-0">
          <ConnectedAccounts />
        </Card>
      </div>
    </div>
  );
}
