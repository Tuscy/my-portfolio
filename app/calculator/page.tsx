"use client";

import { useState, useMemo } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const SEO_TYPES = [
  { value: "local", label: "Local", baseWork: 800 },
  { value: "blog", label: "Blog", baseWork: 600 },
  { value: "services", label: "Services", baseWork: 1000 },
  { value: "onetime", label: "One-time", baseWork: 500 },
] as const;

const TIME_PERIODS = [
  { value: "3", label: "3 months", multiplier: 1 },
  { value: "6", label: "6 months", multiplier: 1.5 },
  { value: "12", label: "12 months", multiplier: 2 },
] as const;

const WEBSITE_TYPES = [
  { value: "service", label: "Service based", multiplier: 1.2 },
  { value: "leadgen", label: "Lead gen", multiplier: 1 },
  { value: "ecommerce", label: "Ecommerce", multiplier: 1.5 },
  { value: "blog", label: "Blog", multiplier: 0.8 },
] as const;

const BASE_COST_PER_PAGE = 200;

function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

function calculateSeoRoi(
  adSpend: number,
  seoTypeValue: string,
  timePeriodValue: string
) {
  const seo = SEO_TYPES.find((s) => s.value === seoTypeValue) ?? SEO_TYPES[0];
  const period = TIME_PERIODS.find((p) => p.value === timePeriodValue) ?? TIME_PERIODS[1];
  const work = Math.round(seo.baseWork * period.multiplier);
  const total = work + adSpend;
  const estimatedValue = total > 0 ? total * (1 + 0.4 + period.multiplier * 0.1) : 0;
  const roiPercent = total > 0 ? ((estimatedValue - total) / total) * 100 : 0;
  return { work, total, roiPercent, estimatedValue };
}

function calculateWebsiteRoi(
  pages: number,
  websiteTypeValue: string,
  existingSite: string,
  returnType: string,
  aov: number
) {
  const wt = WEBSITE_TYPES.find((w) => w.value === websiteTypeValue) ?? WEBSITE_TYPES[0];
  let cost = BASE_COST_PER_PAGE * Math.max(1, pages) * wt.multiplier;
  if (existingSite === "yes") cost *= 0.7;
  cost = Math.round(cost);
  const monthlyLeads = Math.max(1, Math.round(pages * (returnType === "sales" ? 2 : 3) * wt.multiplier));
  const annualReturn = aov > 0 ? monthlyLeads * aov * 12 : 0;
  const roiPercent = cost > 0 && annualReturn > 0 ? ((annualReturn - cost) / cost) * 100 : 0;
  return { cost, monthlyLeads, annualReturn, roiPercent };
}

const selectClassName = cn(
  "border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none md:text-sm",
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  "dark:bg-input/30"
);

export default function CalculatorPage() {
  const [adSpend, setAdSpend] = useState(0);
  const [seoType, setSeoType] = useState("local");
  const [timePeriod, setTimePeriod] = useState("6");

  const [pages, setPages] = useState(5);
  const [websiteType, setWebsiteType] = useState("leadgen");
  const [existingSite, setExistingSite] = useState<"yes" | "no">("no");
  const [returnType, setReturnType] = useState<"leads" | "sales">("leads");
  const [averageOrderValue, setAverageOrderValue] = useState(0);

  const seoResult = useMemo(
    () => calculateSeoRoi(adSpend, seoType, timePeriod),
    [adSpend, seoType, timePeriod]
  );
  const websiteResult = useMemo(
    () =>
      calculateWebsiteRoi(
        pages,
        websiteType,
        existingSite,
        returnType,
        averageOrderValue
      ),
    [pages, websiteType, existingSite, returnType, averageOrderValue]
  );

  return (
    <div className="flex min-h-screen bg-background font-sans">
      <main className="flex w-full flex-col">
        <Header />

        <section className="px-4 py-8 sm:px-6 sm:pt-16 sm:pb-8 lg:px-8">
          <div className="container mx-auto max-w-2xl">
            <div className="mb-8 flex flex-col items-center gap-4 text-center">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                ROI Calculator
              </h1>
              <p className="max-w-xl text-base sm:text-lg leading-7 text-foreground/70">
                Estimate the return on your SEO or website investment.
              </p>
            </div>

            <Tabs defaultValue="seo" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="seo">SEO ROI</TabsTrigger>
                <TabsTrigger value="website">Website ROI</TabsTrigger>
              </TabsList>

              <TabsContent value="seo" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">SEO investment</CardTitle>
                    <CardDescription>
                      Enter your ad spend and SEO setup to see a rough ROI estimate.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ad-spend">Ad spend (£)</Label>
                      <Input
                        id="ad-spend"
                        type="number"
                        min={0}
                        step={1}
                        value={adSpend || ""}
                        onChange={(e) =>
                          setAdSpend(Number(e.target.value) || 0)
                        }
                        placeholder="0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="seo-type">SEO type</Label>
                      <select
                        id="seo-type"
                        className={selectClassName}
                        value={seoType}
                        onChange={(e) => setSeoType(e.target.value)}
                      >
                        {SEO_TYPES.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time-period">Time period</Label>
                      <select
                        id="time-period"
                        className={selectClassName}
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(e.target.value)}
                      >
                        {TIME_PERIODS.map((p) => (
                          <option key={p.value} value={p.value}>
                            {p.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Estimated ROI</CardTitle>
                    <CardDescription>
                      Placeholder figures for illustration; replace with your own model.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="flex justify-between text-sm">
                      <span className="text-foreground/70">Rough value for work</span>
                      <span>{formatCurrency(seoResult.work)}</span>
                    </p>
                    <p className="flex justify-between text-sm">
                      <span className="text-foreground/70">+ Ad spend</span>
                      <span>{formatCurrency(adSpend)}</span>
                    </p>
                    <p className="flex justify-between font-medium border-t pt-2">
                      <span>Total investment</span>
                      <span>{formatCurrency(seoResult.total)}</span>
                    </p>
                    <p className="flex justify-between text-sm pt-1">
                      <span className="text-foreground/70">ROI</span>
                      <span>
                        {seoResult.total > 0
                          ? `${seoResult.roiPercent.toFixed(0)}% return`
                          : "—"}
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="website" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Website project</CardTitle>
                    <CardDescription>
                      Enter your project details to see a rough cost and ROI estimate.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="pages">Number of pages</Label>
                      <Input
                        id="pages"
                        type="number"
                        min={1}
                        max={50}
                        value={pages}
                        onChange={(e) =>
                          setPages(Math.max(1, Number(e.target.value) || 1))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website-type">Website type</Label>
                      <select
                        id="website-type"
                        className={selectClassName}
                        value={websiteType}
                        onChange={(e) => setWebsiteType(e.target.value)}
                      >
                        {WEBSITE_TYPES.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label>Existing site?</Label>
                      <div className="flex gap-4 pt-1">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="existing"
                            checked={existingSite === "yes"}
                            onChange={() => setExistingSite("yes")}
                            className="border-input"
                          />
                          <span className="text-sm">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="existing"
                            checked={existingSite === "no"}
                            onChange={() => setExistingSite("no")}
                            className="border-input"
                          />
                          <span className="text-sm">No</span>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Return type</Label>
                      <div className="flex gap-4 pt-1">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="return"
                            checked={returnType === "leads"}
                            onChange={() => setReturnType("leads")}
                            className="border-input"
                          />
                          <span className="text-sm">Leads</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="return"
                            checked={returnType === "sales"}
                            onChange={() => setReturnType("sales")}
                            className="border-input"
                          />
                          <span className="text-sm">Sales</span>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="aov">Average order value (£)</Label>
                      <Input
                        id="aov"
                        type="number"
                        min={0}
                        step={1}
                        value={averageOrderValue || ""}
                        onChange={(e) =>
                          setAverageOrderValue(Number(e.target.value) || 0)
                        }
                        placeholder="0"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Estimated cost & ROI</CardTitle>
                    <CardDescription>
                      Placeholder figures for illustration; replace with your own model.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="flex justify-between text-sm">
                      <span className="text-foreground/70">Estimated cost</span>
                      <span>{formatCurrency(websiteResult.cost)}</span>
                    </p>
                    {averageOrderValue > 0 && (
                      <>
                        <p className="flex justify-between text-sm">
                          <span className="text-foreground/70">
                            Est. {returnType === "sales" ? "sales" : "leads"} per month
                          </span>
                          <span>{websiteResult.monthlyLeads}</span>
                        </p>
                        <p className="flex justify-between text-sm">
                          <span className="text-foreground/70">Est. annual return (at AOV)</span>
                          <span>{formatCurrency(websiteResult.annualReturn)}</span>
                        </p>
                      </>
                    )}
                    <p className="flex justify-between font-medium border-t pt-2">
                      <span>ROI</span>
                      <span>
                        {websiteResult.cost > 0 && averageOrderValue > 0
                          ? `${websiteResult.roiPercent.toFixed(0)}%`
                          : "—"}
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
