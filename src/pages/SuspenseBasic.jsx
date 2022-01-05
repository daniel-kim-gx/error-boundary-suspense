import React, { Suspense } from "react";
import Header from "../components/Header";
import { ErrorBoundary } from "react-error-boundary";
import { fetchUserResource } from "../resources/api";

function SuspenseTest() {
  return (
    <ErrorBoundary
      FallbackComponent={() => <div>Error boundary fallback component</div>}
    >
      <Suspense fallback={<div>Suspense fallback</div>}>
        <UserComponent />
      </Suspense>
    </ErrorBoundary>
  );
}

const userResource = fetchUserResource();

function UserComponent() {
  const user = userResource.read();
  return <div>{user.name}</div>;
}

function SuspenseBasic() {
  return (
    <div>
      <Header />
      <h1>Suspense Basic</h1>
      <SuspenseTest />
    </div>
  );
}

export default SuspenseBasic;
