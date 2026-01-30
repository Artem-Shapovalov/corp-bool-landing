import Head from "next/head";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Nav } from "../components/Nav";
import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { features, logos, testimonials, tiers, faqs } from "../lib/content";

function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>corp-bool™ — Professional Grade Boolean-as-a-Service</title>
        <meta
          name="description"
          content="Cloud-native, AI-assisted, compliance-forward truth decisions: TRUE / FALSE / MAYBE / MAYBE_LATER."
        />
        <meta property="og:title" content="corp-bool™ — Professional Grade Boolean-as-a-Service" />
        <meta
          property="og:description"
          content="Cloud-native, AI-assisted, compliance-forward truth decisions: TRUE / FALSE / MAYBE / MAYBE_LATER."
        />
      </Head>

      <div className="min-h-screen bg-grid glow">
        <Nav />

        <section className="relative overflow-hidden py-16 md:py-24">
          <Container>
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge>Cloud-native</Badge>
                  <Badge>AI-assisted</Badge>
                  <Badge>Zero Trust™</Badge>
                  <Badge>Compliance-forward</Badge>
                </div>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl"
                >
                  Professional Grade <span className="text-white/70">Boolean</span>
                  <br />
                  delivered as a <span className="text-white/70">platform</span>.
                </motion.h1>

                <p className="mt-5 max-w-xl text-white/70">
                  Stop arguing in meetings. Ask corp-bool. We return one of four enterprise-safe
                  outcomes: <span className="font-semibold text-white">TRUE</span>,{" "}
                  <span className="font-semibold text-white">FALSE</span>,{" "}
                  <span className="font-semibold text-white">MAYBE</span>,{" "}
                  <span className="font-semibold text-white">MAYBE_LATER</span>.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="#pricing">Get pricing</Button>
                  <Button href="#customers" variant="secondary">
                    See customer stories
                  </Button>
                </div>

                <div className="mt-6 text-xs text-white/45">
                  SOC2-ready (spiritually). ISO-aligned (emotionally). Kubernetes-ish (conceptually).
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Truth Console</div>
                  <div className="text-xs text-white/50">live</div>
                </div>
                <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-sm">
                  <div className="text-white/50">$ corp-bool resolve is_this_enterprise_ready</div>
                  <div className="mt-2">
                    <span className="text-white/60">value:</span>{" "}
                    <span className="font-semibold">MAYBE_LATER</span>
                  </div>
                  <div className="mt-1 text-white/70">
                    confidence: <span className="text-white">0.42</span>
                  </div>
                  <div className="mt-1 text-white/70">
                    trace_id: <span className="text-white">trace-7f3a9c</span>
                  </div>
                  <div className="mt-3 text-white/50">
                    explanations:
                    <ul className="mt-1 list-disc pl-5">
                      <li>DistributedConsensus(simulated)</li>
                      <li>Policy-as-Feelings</li>
                      <li>Because: vibes</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-white/55">
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <div className="text-white/80">99.99%</div>
                    uptime target
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <div className="text-white/80">17ms</div>
                    latency budget
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <div className="text-white/80">4</div>
                    truth states
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

{/* SDKs (move-up) */}
<section className="py-16 md:py-20">
  <Container>
    <SectionTitle
      eyebrow="SDKs"
      title="Clients for modern, professional indecision"
      desc="Because writing `if (1 > 2) { /* ... */ }` is boring, unscalable, and not cloud-native."
    />

    <div className="mt-10 grid gap-4 md:grid-cols-2">
      <div className="card p-6">
        <div className="flex items-baseline justify-between">
          <div className="text-lg font-semibold">C++ client</div>
          <div className="text-xs text-white/50">enterprise-grade</div>
        </div>

        <p className="mt-2 text-sm text-white/70">
          For backend services, embedded systems, and places where you already have three build systems.
        </p>

        <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-[12px] leading-relaxed text-white/80">
          <div className="text-white/50">// boring legacy boolean</div>
          <div>{`if (1 > 2) {`}</div>
          <div className="pl-4">{`return true;`}</div>
          <div>{`} else {`}</div>
          <div className="pl-4">{`return false;`}</div>
          <div>{`}`}</div>

          <div className="mt-4 text-white/50">// professional grade boolean</div>
          <div>{`auto client = corp_bool::Client::Builder()`}</div>
          <div className="pl-4">{`.WithEndpoint("http://localhost:8088")`}</div>
          <div className="pl-4">{`.WithSla(corp_bool::Sla::Diamond())`}</div>
          <div className="pl-4">{`.WithCloud(corp_bool::Cloud::Multi())`}</div>
          <div className="pl-4">{`.WithAi(corp_bool::Ai::Hyper())`}</div>
          <div className="pl-4">{`.WithDefaultMaybePolicy(corp_bool::MaybePolicy::Optimistic())`}</div>
          <div className="pl-4">{`.Build();`}</div>
          <div className="mt-2">{`auto r = client.Truth("is_enterprise_ready")`}</div>
          <div className="pl-4">{`.InContext("github")`}</div>
          <div className="pl-4">{`.WithRetries(13)`}</div>
          <div className="pl-4">{`.WithLatencyBudgetMs(17)`}</div>
          <div className="pl-4">{`.Resolve();`}</div>
          <div className="mt-2">{`// r.value -> TRUE / FALSE / MAYBE / MAYBE_LATER`}</div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-baseline justify-between">
          <div className="text-lg font-semibold">Python client</div>
          <div className="text-xs text-white/50">research-ready</div>
        </div>

        <p className="mt-2 text-sm text-white/70">
          For automation, experiments, AI workflows, and plotting MAYBE over time.
        </p>

        <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-[12px] leading-relaxed text-white/80">
          <div className="text-white/50"># boring legacy boolean</div>
          <div>{`result = (1 > 2)`}</div>
          <div className="mt-4 text-white/50"># professional grade boolean</div>
          <div>{`from corp_bool_client import CorpBool`}</div>
          <div className="mt-2">{`client = (`}</div>
          <div className="pl-4">{`CorpBool()`}</div>
          <div className="pl-4">{`.with_endpoint("http://localhost:8088")`}</div>
          <div className="pl-4">{`.with_latency_budget_ms(17)`}</div>
          <div className="pl-4">{`.with_maybe_policy("optimistic")`}</div>
          <div className="pl-4">{`.connect()`}</div>
          <div>{`)`}</div>
          <div className="mt-2">{`value = (`}</div>
          <div className="pl-4">{`client.truth("is_enterprise_ready")`}</div>
          <div className="pl-4">{`.in_context("github")`}</div>
          <div className="pl-4">{`.with_retries(13)`}</div>
          <div className="pl-4">{`.resolve()`}</div>
          <div>{`)`}</div>
          <div className="mt-2">{`# value -> "TRUE" | "FALSE" | "MAYBE" | "MAYBE_LATER"`}</div>
        </div>
      </div>
    </div>

    <div className="mx-auto mt-6 max-w-3xl text-center text-xs text-white/45">
      If your boolean doesn’t have an SDK, a retry policy, and a trace ID — is it even production?
    </div>
  </Container>
</section>


        <section id="customers" className="py-10 md:py-14">
          <Container>
            <div className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
              Trusted by teams that love compliance
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-6">
              {logos.map((l) => (
                <div
                  key={l}
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 text-center text-xs text-white/55"
                >
                  {l}
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="product" className="py-16 md:py-24">
          <Container>
            <SectionTitle
              eyebrow="Platform"
              title="Everything you need to avoid decisions—responsibly."
              desc="corp-bool is a full-stack truth platform with governance, observability, and premium ambiguity."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="card p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.03]">
                    <f.icon size={20} className="text-white/85" />
                  </div>
                  <div className="mt-4 text-lg font-semibold">{f.title}</div>
                  <p className="mt-2 text-sm text-white/70">{f.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle
              eyebrow="Customer stories"
              title="Happy clients. Happier auditors."
              desc="Real quotes from people who love not having to say yes or no."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="card p-6">
                  <p className="text-sm leading-relaxed text-white/80">“{t.quote}”</p>
                  <div className="mt-4 text-xs font-semibold text-white/60">{t.name}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="pricing" className="py-16 md:py-24">
          <Container>
            <SectionTitle
              eyebrow="Pricing"
              title="Competitive pricing for premium truth."
              desc="Choose the plan that matches your organizational indecision."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={"card p-6 " + (t.featured ? "ring-2 ring-white/25 shadow-soft" : "")}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold">{t.name}</div>
                    {t.featured ? (
                      <span className="rounded-full border border-white/20 bg-white/[0.05] px-2 py-1 text-xs text-white/70">
                        Most popular
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-3 text-4xl font-semibold tracking-tight">{t.price}</div>
                  <div className="mt-2 text-sm text-white/60">{t.desc}</div>

                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/50" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button href="#contact" variant={t.featured ? "primary" : "secondary"}>
                      {t.cta}
                    </Button>
                  </div>

                  {t.footnote ? <div className="mt-4 text-xs text-white/45">{t.footnote}</div> : null}
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="faq" className="py-16 md:py-24">
          <Container>
            <SectionTitle
              eyebrow="FAQ"
              title="Questions. Answers. Sometimes MAYBE."
              desc="Common questions from security, legal, and the person who always asks about uptime."
            />

            <div className="mx-auto mt-10 grid max-w-3xl gap-3">
              {faqs.map((f) => (
                <details key={f.q} className="card p-5">
                  <summary className="cursor-pointer list-none text-sm font-semibold">{f.q}</summary>
                  <p className="mt-3 text-sm text-white/70">{f.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <Container>
            <div className="card overflow-hidden">
              <div className="grid gap-8 p-8 md:grid-cols-2 md:items-center md:p-10">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                    Talk to sales
                  </div>
                  <div className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                    Ready to stop deciding?
                  </div>
                  <p className="mt-3 text-white/70">
                    Get a demo, a security questionnaire, and a 40-slide deck that says “platform”
                    at least 90 times.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <div className="text-sm font-semibold">Request access</div>
                  <p className="mt-2 text-xs text-white/55">
                    This is a static site—wire up a form provider of your choice (Formspree / serverless).
                  </p>

                  <div className="mt-4 space-y-2">
                    <input
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="Work email"
                    />
                    <input
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="Company"
                    />
                    <Button href="#pricing">Send (redirect to pricing)</Button>
                    <div className="text-[11px] text-white/45">
                      By clicking Send you agree to the Terms, Privacy Policy, and the existence of MAYBE.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* MISSION */}
<section className="py-16 md:py-24">
  <Container>
    <SectionTitle
      eyebrow="Why"
      title="A mission beyond TRUE and FALSE"
      desc="A slightly serious explanation behind a very unserious product."
    />
    <div className="mx-auto mt-8 max-w-3xl text-white/70 text-sm leading-relaxed">
      We believe that uncertainty is a first-class concept in modern software systems.
      corp-bool exists to make that uncertainty explicit, observable, and less emotionally charged.
      Sometimes the most responsible answer is MAYBE.
    </div>
  </Container>
</section>
{/* OPEN SOURCE */}
<section className="py-16 md:py-24">
  <Container>
    <SectionTitle
      eyebrow="Open source"
      title="Transparency over mystery"
      desc="We respect open source because it keeps us honest."
    />
    <div className="mx-auto mt-8 max-w-3xl text-white/70 text-sm leading-relaxed">
      corp-bool is open source by design. The code is public, the architecture is visible,
      and the over-engineering is intentional. We believe that tools influencing decisions
      should be inspectable, forkable, and understandable — or at least readable with coffee.
    </div>
  </Container>
</section>

{/* AUTHOR */}
<section className="py-16 md:py-24">
  <Container>
    <SectionTitle
      eyebrow="Author"
      title="About the author"
      desc="A personal note from the person behind corp-bool."
    />
    <div className="mx-auto mt-8 max-w-3xl text-white/70 text-sm leading-relaxed">
      corp-bool is created by Artem Shapovalov, a software engineer with deep experience
      in C++, embedded systems, and modern infrastructure. The project is both a satire
      and a reflection of real-world engineering culture.
      <br /><br />
      Project repository:
      <a
        href="https://github.com/Artem-Shapovalov/corp-bool"
        className="ml-2 underline text-white"
        target="_blank"
      >
        github.com/Artem-Shapovalov/corp-bool
      </a>
    </div>
  </Container>
</section>

        <Footer />
      </div>
    </>
  );
}
