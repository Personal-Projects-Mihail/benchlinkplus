import Script from 'next/script';

interface SchemaScriptProps {
  schema: object | object[];
}

export function SchemaScript({ schema }: SchemaScriptProps) {
  const schemaArray = Array.isArray(schema) ? schema : [schema];

  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaArray.length === 1 ? schemaArray[0] : schemaArray),
      }}
    />
  );
}
