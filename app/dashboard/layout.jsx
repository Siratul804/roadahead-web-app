import { Links } from "../components/Links";

export default function DashboardLayout({ children, nav }) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Links />

      {children}
    </section>
  );
}
