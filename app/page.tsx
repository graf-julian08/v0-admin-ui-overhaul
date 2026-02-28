import { AppShell } from "@/components/app-shell"
import { CommandInput } from "@/components/command-input"
import { ExecutionLogs } from "@/components/execution-logs"
import { ToolsList } from "@/components/tools-list"

export default function DashboardPage() {
  return (
    <AppShell>
      <main className="flex flex-1 flex-col p-8">
        {/* Centered Command Input — the zen interface */}
        <section className="flex flex-1 items-center justify-center pb-8">
          <CommandInput />
        </section>

        {/* Bottom section: Logs + Tools */}
        <section className="flex flex-col gap-8 border-t border-border pt-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
            <ExecutionLogs />
            <ToolsList />
          </div>
        </section>
      </main>
    </AppShell>
  )
}
