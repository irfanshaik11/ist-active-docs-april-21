import{u as o,j as e}from"./index-BJ9uV4Hk.js";const a={title:"Intro",description:"undefined"};function t(i){const n={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"intro",children:["Intro",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intro",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Interstate currently offers:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Inclusion Preconfirmations"}),`
`,e.jsx(n.li,{children:"Execution Preconfirmations"}),`
`,e.jsx(n.li,{children:"Other Proposer Commitments"}),`
`]}),`
`,e.jsxs(n.h2,{id:"inclusion-preconfirmation",children:["Inclusion Preconfirmation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#inclusion-preconfirmation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["A preconfirmation is a sale of one or more transaction in an upcoming ethereum block prior to the block occuring. The proposer commitment is backed by restaking netwoks like ",e.jsx(n.a,{href:"https://karak.network",children:"Karak"})," and ",e.jsx(n.a,{href:"https://eigenlayer.xyz",children:"Eigenlayer"}),". The commitment is stake backed, and slashed stake will be used to compensate the requester if their preconfirmation is not honored."]}),`
`,e.jsx(n.p,{children:"Space in the block can be bought 1 - ~32 slots in advance (the rough size of the ethereum proposer lookahead). We expect 90% of validators to run a preconfirmation sidecar (same as 90% validators today run flashbots) and offer preconfirmations."}),`
`,e.jsx(n.p,{children:"Pricing: The preconfirmation buyer can expect to pay 1-10% of gas in addition gas fees to buy an inclusion preconfirmation."}),`
`,e.jsx(n.p,{children:"Inclusion preconfirmations give a weaker guarantee than execution preconfirmations in that the transaction may revert if the gas limit of the block is exceeded, or if there is a revert on the transction."}),`
`,e.jsx(n.p,{children:"So if you buy an inclusion preconfirmation, your transaction will be included in the block but may revert. Execution preconfirmations are guaranteed to not revert."}),`
`,e.jsxs(n.h2,{id:"execution-preconfirmation-coming-soon",children:["Execution Preconfirmation (coming soon)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#execution-preconfirmation-coming-soon",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An execution preconfirmation is guaranteed to be included in the upcoming block and guarantees the transaction will not revert. Essentially the validator is selling the txs in the block one by one, with the top of the block being sold first."}),`
`,e.jsx(n.p,{children:"This gives the preconfirmation buyer the guarantee that their transaction will not revert."}),`
`,e.jsxs(n.h2,{id:"other-proposer-commitments-coming-soon",children:["Other Proposer Commitments (coming soon)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#other-proposer-commitments-coming-soon",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"These allow the proposer to commit to generic attestations."})]})}function s(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{s as default,a as frontmatter};
