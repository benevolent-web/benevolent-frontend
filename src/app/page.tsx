import HeroSection from "./_components/landing/hero-section";
// import ServicesSection from "./_components/landing/services-section";
import HookSection from "./_components/landing/hook-section";
import CustomerProfileSection from "./_components/landing/customer-profile-section";

export default function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  // void api.post.getLatest.prefetch();

  return (
    <>
      <HeroSection />
      <HookSection />
      <CustomerProfileSection />
      {/* 
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
                {session && <span>Logged in as {session.user?.name}</span>}
              </p>
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>

          {session?.user && <LatestPost />} */}
      {/* <ServicesSection /> */}
    </>
  );
}
