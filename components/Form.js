import Script from "next/script";

export default function Form({ formId }) {
  function handleLoad() {
    window.Cognito.mount(formId, "#form");
  }

  return (
    <div>
      <div id="form" />
      <Script
        src="https://www.cognitoforms.com/f/seamless.js"
        data-key="VIFwyLJpI0-1pUDbhQ8wSg"
        data-form={formId}
        onLoad={handleLoad}
      />
    </div>
  );
}
