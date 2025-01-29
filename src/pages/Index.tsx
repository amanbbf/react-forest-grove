import MainNav from "@/components/MainNav";

const Index = () => {
  return (
    <>
      <MainNav />
      <div className="min-h-screen pt-16 flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
          <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
        </div>
      </div>
    </>
  );
};

export default Index;