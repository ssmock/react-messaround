import React from "react";

const Memoized = (React as any).memo(({ text }: {text: string}) =>
    (<h1>Memo! {text}</h1>))

export default Memoized