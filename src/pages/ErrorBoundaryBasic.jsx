import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "../components/Header";

function ErrorFallback(props) {
  const { error, resetErrorBoundary } = props;
  console.log("fallback props:", props);

  return (
    <div>
      <p>Something went wrong.</p>
      <pre>{error.message}</pre>
      <div>
        <button onClick={resetErrorBoundary}>Try again!</button>
      </div>
    </div>
  );
}

function Bomb() {
  throw new Error("Bomb!!");
  return null;
}

function ErrorBoundaryBasic() {
  const [explode, setExplode] = useState(false);

  return (
    <div>
      <Header />
      <h1>ErrorBoundaryBasic</h1>
      <button onClick={() => setExplode(true)}>Load bomb!</button>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setExplode(false)}
        onError={() => {
          console.log("onError called!");
        }}
        resetKeys={[explode]}
      >
        {explode ? <Bomb /> : null}
      </ErrorBoundary>
    </div>
  );
}

export default ErrorBoundaryBasic;
