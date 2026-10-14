const tasks = [
  {
    title: "Plan the week",
    detail: "Choose the three most important goals",
    category: "Planning",
    priority: "High",
    complete: true,
  },
  {
    title: "Review project notes",
    detail: "Organize ideas for the next sprint",
    category: "Work",
    priority: "Medium",
    complete: false,
  },
  {
    title: "Read for 20 minutes",
    detail: "Continue the book from yesterday",
    category: "Personal",
    priority: "Low",
    complete: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 p-4 text-stone-900 sm:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-3xl bg-white shadow-sm md:grid-cols-[240px_1fr]">
        <aside className="flex flex-col border-b border-stone-100 p-6 md:border-b-0 md:border-r">
          <div className="flex items-center gap-3 text-lg font-bold">
            <span className="grid size-9 place-items-center rounded-xl bg-emerald-700 text-white">
              M
            </span>
            Mini Tasks
          </div>

          <p className="mb-3 mt-10 text-xs font-semibold uppercase tracking-wider text-stone-400">
            Workspace
          </p>
          <nav aria-label="Workspace">
            <span
              aria-current="page"
              className="flex items-center gap-3 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800"
            >
              <span aria-hidden="true">▦</span>
              All tasks
              <span className="ml-auto rounded-full bg-white px-2 py-0.5 text-xs text-emerald-800">
                3
              </span>
            </span>
          </nav>

          <div className="mt-auto hidden rounded-2xl bg-stone-50 p-4 md:block">
            <p className="text-sm font-semibold">Small steps add up.</p>
            <p className="mt-1 text-xs leading-5 text-stone-500">
              Keep your tasks simple and make progress one at a time.
            </p>
          </div>
        </aside>

        <section className="p-6 sm:p-10">
          <header className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-emerald-700">Your workspace</p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight">All tasks</h1>
              <p className="mt-2 text-sm text-stone-500">
                A clear place to keep track of what matters.
              </p>
            </div>
            <div className="rounded-xl bg-stone-50 px-4 py-3 text-sm text-stone-600">
              <span className="font-semibold text-stone-900">1</span> of 3 complete
            </div>
          </header>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-100 p-4">
              <p className="text-sm text-stone-500">Total tasks</p>
              <p className="mt-2 text-2xl font-bold">3</p>
            </div>
            <div className="rounded-2xl border border-stone-100 p-4">
              <p className="text-sm text-stone-500">In progress</p>
              <p className="mt-2 text-2xl font-bold">2</p>
            </div>
            <div className="rounded-2xl border border-stone-100 p-4">
              <p className="text-sm text-stone-500">Completed</p>
              <p className="mt-2 text-2xl font-bold">1</p>
            </div>
          </div>

          <div className="mt-10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Your task list</h2>
              <span className="text-sm text-stone-500">3 tasks</span>
            </div>
            <ul className="space-y-3">
              {tasks.map((task) => (
                <li
                  key={task.title}
                  className="flex items-start gap-4 rounded-2xl border border-stone-100 p-4 sm:p-5"
                >
                  <span
                    aria-label={task.complete ? "Completed" : "Not completed"}
                    className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border text-xs ${
                      task.complete
                        ? "border-emerald-700 bg-emerald-700 text-white"
                        : "border-stone-300 text-transparent"
                    }`}
                  >
                    ✓
                  </span>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`font-semibold ${
                        task.complete ? "text-stone-400 line-through" : ""
                      }`}
                    >
                      {task.title}
                    </p>
                    <p className="mt-1 text-sm text-stone-500">{task.detail}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-stone-100 px-2.5 py-1 text-xs text-stone-600">
                        {task.category}
                      </span>
                      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs text-amber-800">
                        {task.priority} priority
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
