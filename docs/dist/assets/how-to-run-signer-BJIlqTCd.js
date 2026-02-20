import{u as r,j as e}from"./index-Cfn9vID0.js";const l={title:"Setting Up Web3Signer",description:"undefined"};function n(i){const s={a:"a",code:"code",div:"div",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"You can run Web3Signer, CommitBoost Signer (with Dirk, or Web3Signer) as a signer. Signers allow you to safely use your keystores to sign messages, without exposing them. Interstate asks you to sign a one time message letting your relays know which RPC per beacon node is opted into."}),`
`,e.jsx(s.header,{children:e.jsxs(s.h1,{id:"setting-up-web3signer",children:["Setting Up Web3Signer",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setting-up-web3signer",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Download and unzip web3signer package."}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"wget https://artifacts.consensys.net/public/web3signer/raw/names/web3signer.tar.gz/versions/latest/web3signer.tar.gz"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"tar -xvzf web3signer.tar.gz"})})]})})}),`
`,e.jsxs(s.ol,{start:"2",children:[`
`,e.jsx(s.li,{children:"Make the web3signer command as the system command."}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"echo 'export PATH=$PATH:/home/web3signer-25.2.0/bin'>> ~/.bashrc "})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"source ~/.bashrc"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"echo 'export PATH=$PATH:/home/web3signer-25.2.0/bin'>> ~/.zshrc "})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"source ~/.zshrc"})})]})})}),`
`,e.jsxs(s.ol,{start:"3",children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/voldev94321/copying-validator-keystores",children:"clone "})," and copy the keystores for web3signer."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Make the certification and other files needs for web3signer."}),`
`]}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Generate the Web3Signer keystore ( You can use the ngrok for testing with the domain name )."}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'keytool -genkeypair -keystore web3signer_keystore.p12 -storetype PKCS12 -storepass changeit -alias web3signer -keyalg RSA -keysize 2048 -validity 109500 -dname "CN=domain.example.com, OU=PegaSys, O=ConsenSys, L=Brisbane, ST=QLD, C=AU" -ext san=dns:domain.example.com,ip:YOUR_IP_ADDRESS'})})})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Create a plain text file (for example web3signer_keystore_password.txt) that stores the password(for example: ",e.jsx(s.code,{children:"changeit"})," in this case) used to create the keystore."]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"sudo nano web3signer_keystore_password.txt"})})})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Export the Web3Signer public certificate from the Web3Signer keystore to PEM format."}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"keytool -exportcert -keystore ./web3signer_keystore.p12 -alias web3signer -rfc -file web3signer.pem"})})})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Import the public certificate into a truststore to be used by client, and type yes if asked to trust the certificate."}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"keytool -importcert -storetype PKCS12 -keystore web3signer_truststore.p12 -alias web3signer -trustcacerts -storepass changeit -file ./web3signer.pem"})})})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Create a plain text file (for example truststore_pass.txt) that stores the password(for example: ",e.jsx(s.code,{children:"changeit"})," in this case) used to create the keystore."]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"sudo nano truststore_pass.txt"})})})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Generate a new private key"}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"openssl genpkey -algorithm RSA -out private.key"})})})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Create a certificate signing request (CSR)"}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"openssl req -new -key private.key -out request.csr"})})})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Combine private key and certificate into a PEM file"}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"cat web3signer.pem private.key > combined.pem"})})})})}),`
`,e.jsxs(s.ol,{start:"4",children:[`
`,e.jsx(s.li,{children:"Start the web3signer server."}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"web3signer --http-listen-host 0.0.0.0 --http-host-allowlist '*' --tls-allow-any-client true --tls-keystore-file /$WEB3SIGNER_PATH/web3signer_keystore.p12 --tls-keystore-password-file /$WEB3SIGNER_PATH/web3signer_keystore_password.txt eth2 --network mainnet --keystores-path /$WEB3SIGNER_PATH/keystore/keys  --keystores-passwords-path /$WEB3SIGNER_PATH/keystore/secrets --slashing-protection-enabled false --commit-boost-api-enabled true --proxy-keystores-path /$WEB3SIGNER_PATH/keystore/keys --proxy-keystores-password-file /$WEB3SIGNER_PATH/keystore/secrets"})})})})}),`
`,e.jsx(s.header,{children:e.jsxs(s.h1,{id:"connect-to-web3signer-server",children:["Connect to web3signer server.",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#connect-to-web3signer-server",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Make the certification file."}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Make ",e.jsx(s.code,{children:"san.cnf"})]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	[req]"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	default_bits = 4096"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	prompt = no"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	default_md = sha256"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	distinguished_name = dn"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	req_extensions = req_ext"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	[dn]"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	CN = domain.example.com"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	[req_ext]"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	subjectAltName = IP:YOUR_IP_ADDRESS"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	keyUsage = keyEncipherment, dataEncipherment"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    extendedKeyUsage = serverAuth"})})]})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Make csr"}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"openssl req -new -key combined.pem -out w3s.csr -config san.cnf "})})})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Make the key"}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"openssl genpkey -algorithm RSA -out w3s.key -pkeyopt rsa_keygen_bits:4096 "})})})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Self-Signed CA"}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'openssl req -x509 -new -nodes -key w3s.key -sha256 -days 3650 -out my_ca.crt -subj "/CN=domain.example.com"'})})})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Sign cert"}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"openssl x509 -req -in w3s.csr -CA my_ca.crt -CAkey w3s.key -CAcreateserial -out w3s.crt -days 3650 -extensions req_ext -extfile san.cnf"})})})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Check cert"}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"openssl x509 -in w3s.crt -noout -text"})})})})}),`
`,e.jsx(s.p,{children:`Now you can run the sidecar after setting the domain url of the web3signer, the cert path and the pem path.
For example`}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WEB3SIGNER_URL=https://623a-2a01-4ff-f0-4039-00-1.ngrok-free.app"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"CA_CERT_PATH=/root/kartos/web3signer-25.2.0/crt/w3s.crt"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"CLIENT_COMBINED_PEM_PATH=/root/kartos/web3signer-25.2.0/crt/my_cert.pem"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"# Commit-Boost Signer"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"https://commit-boost.github.io/commit-boost-client/"})})]})})})]})}function t(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{t as default,l as frontmatter};
