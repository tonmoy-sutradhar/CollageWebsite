export default function ResearchPapers() {
  const links = [
    { title: "AI in Education", url: "https://orp.aiub.edu/ajse" },
    {
      title: "Green Energy",
      url: "https://groenvermogennl.org/en/?gad_source=1&gad_campaignid=22317686142&gbraid=0AAAAAqDILCiWG7m0sn_PlGN9Aw9LmjwBI&gclid=Cj0KCQjws4fEBhD-ARIsACC3d2_QEWgTZqP_wTtxU2fSBbRAJbsHiPbEaKM-O6DG1r4vCtoBA1TAHQ4aAmweEALw_wcB",
    },
    {
      title: "Data Security",
      url: "https://www.congruity360.com/our-platform-solutions/data-security-posture/?utm_device=c&utm_campaign=&utm_source=google&utm_term=data%20security%20solutions&utm_medium=ppc&utm_content=&utm_content=759242348636&hsa_ad=759242348636&hsa_grp=184218037907&hsa_kw=data%20security%20solutions&hsa_ver=3&hsa_net=adwords&hsa_acc=3062959047&hsa_src=g&hsa_cam=22694602039&hsa_mt=e&hsa_tgt=kwd-375878162&gad_source=1&gad_campaignid=22694602039&gbraid=0AAAAADIv6IIJmDrphpife_xwNdiCrXOwy&gclid=Cj0KCQjws4fEBhD-ARIsACC3d29E4Owxy8Wjlk8VX0HsyB5O6LqwLOMz2HpD01Kfahf7D6S6NnyazUAaAgJSEALw_wcB",
    },
  ];
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2">Research Papers</h2>
      <ul className="list-disc pl-6">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.url} className="text-blue-600 underline">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
