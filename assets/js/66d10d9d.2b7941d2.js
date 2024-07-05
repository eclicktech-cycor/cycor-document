"use strict";(self.webpackChunkcycor=self.webpackChunkcycor||[]).push([[2197],{4273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=t(4848),o=t(8453);const s={sidebar_position:2},a=void 0,i={id:"\u7528\u6237\u6587\u6863/\u90e8\u7f72\u67b6\u6784",title:"\u90e8\u7f72\u67b6\u6784",description:"prometheus-operator \u7248\u672c\uff1a v0.42.1 \uff08\u4e3a\u540e\u671f\u517c\u5bb9kubesphere 3.1\uff09",source:"@site/docs/\u7528\u6237\u6587\u6863/\u90e8\u7f72\u67b6\u6784.md",sourceDirName:"\u7528\u6237\u6587\u6863",slug:"/\u7528\u6237\u6587\u6863/\u90e8\u7f72\u67b6\u6784",permalink:"/docs/\u7528\u6237\u6587\u6863/\u90e8\u7f72\u67b6\u6784",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u7528\u6237\u6587\u6863/\u90e8\u7f72\u67b6\u6784.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u7ba1\u7406",permalink:"/docs/\u5f00\u59cb\u4e0a\u624b/\u914d\u7f6e\u7ba1\u7406"},next:{title:"\u5165\u95e8",permalink:"/docs/\u5f00\u53d1\u8005\u6587\u6863/\u5165\u95e8"}},c={},u=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"prometheus-operator \u7248\u672c\uff1a v0.42.1 \uff08\u4e3a\u540e\u671f\u517c\u5bb9kubesphere 3.1\uff09"}),"\n",(0,r.jsx)(n.p,{children:"prometheus \u7248\u672c\uff1aV2.26.0 \uff08\u5173\u8054operator\u7248\u672c\uff09"}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u4e2d\u9700\u8981\u4fee\u6539\u7684\u90e8\u5206\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"  # \u96c6\u7fa4\u8bc6\u522b\u7b26\n  externalLabels:\n    cluster: intranet-dev\n  # \u672c\u5730prometheus\u4e0d\u538b\u7f29\u6570\u636e  \n  disableCompaction: true\n  # \u8fdc\u7a0b\u5199\u914d\u7f6e\n  remoteWrite:\n  - queueConfig:\n      batchSendDeadline: 5s\n      capacity: 1000\n      maxBackoff: 100ms\n      maxSamplesPerSend: 100\n      maxShards: 500\n      minBackoff: 30ms\n      minShards: 1\n    remoteTimeout: 30s\n    url: http://10.100.135.56:19291/api/v1/receive/\n\talerting:\n\t\talertmanagers:\n\t\t- name: alertmanager-main\n\t\t  namespace: monitoring\n\t\t  port: web\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["url: '",(0,r.jsx)(n.a,{href:"http://172.30.176.11:30502/api/v1/receive/",children:"http://172.30.176.11:30502/api/v1/receive/"}),"'"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl delete deployment prometheus-operator -n default\nkubectl delete deployment grafana -n default\nkubectl delete deployment alertmanager -n kube-system\nkubectl delete ns monitor-ali-fra\nkubectl delete ds node-exporter -n kube-system\nkubectl delete --ignore-not-found customresourcedefinitions \\\n  prometheuses.monitoring.coreos.com \\\n  servicemonitors.monitoring.coreos.com \\\n  podmonitors.monitoring.coreos.com \\\n  alertmanagers.monitoring.coreos.com \\\n  prometheusrules.monitoring.coreos.com\n  \nkubectl create clusterrolebinding prometheus-admin-binding --clusterrole=cluster-admin --user=system:serviceaccount:monitoring:prometheus-k8s\n"})}),"\n",(0,r.jsx)(n.p,{children:"deducted by cash coupons 0\ndeducted by prepaid card 0\ninvoice discount 82.31\nlist price -1\noutstanding amount 35.28\npayent amount  0\npretax amount 35.28\npretax gross amount 117.5\n\u7528\u73b0\u91d1\u5238\u6263\u9664 0\n\u9884\u4ed8\u5361\u6263\u9664 0\n\u53d1\u7968\u6298\u6263 82.31\n\u6807\u4ef7-1\n\u672a\u507f\u91d1\u989d 35.28\n\u652f\u4ed8\u91d1\u989d 0\n\u7a0e\u524d\u91d1\u989d 35.28\n\u7a0e\u524d\u603b\u989d 117.5"})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(6540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);