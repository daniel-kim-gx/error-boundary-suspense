function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      console.log("then called.");
      status = "success";
      result = r;
    },
    (e) => {
      console.log("error called.");
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      console.log("read called.", status);

      if (status === "pending") {
        throw suspender;
      }
      if (status === "error") {
        throw result;
      }
      return result;
    },
  };
}

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "ringo start...." });
    }, 1000);
  });
}

function fetchUserError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("This is error...!"));
    }, 1000);
  });
}

export function fetchUserResource() {
  return wrapPromise(fetchUserError());
}
