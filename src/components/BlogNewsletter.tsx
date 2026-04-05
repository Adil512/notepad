"use client";

export function BlogNewsletter() {
  return (
    <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-3xl p-8 sm:p-12 text-center shadow-xl">
      <h3 className="text-2xl md:text-3xl font-bold font-display mb-3">
        Never miss an update
      </h3>
      <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
        Join thousands of writers who receive our monthly strategies on how to
        maintain a distraction-free writing flow.
      </p>
      <form
        className="flex flex-col sm:flex-row max-w-md mx-auto gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Subscription feature coming soon!");
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-xl lg:rounded-full bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl lg:rounded-full bg-foreground text-background font-bold hover:bg-foreground/90 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
