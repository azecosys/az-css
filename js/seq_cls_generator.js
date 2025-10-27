w.namedColors=['black','white','red','green','blue','yellow','magenta','cyan','maroon','olive','navy','purple','lime','teal','orange','brown','pink','silver','gray','darkgray','lightgray','lavender'];
const sidesMap={t:'top',r:'right',b:'bottom',l:'left'}, brdrStyls=['solid','dotted','dashed'], mRules=[{n:'w',q:'(min-width: 1441px) and (max-width: 1920px)'},{n:'desk',q:'(min-width: 993px) and (max-width: 1440px)'},{n:'tab',q:'(min-width: 481px) and (max-width: 992px)'},{n:'mob',q:'(max-width:480px)'},{n:'prnt',q:'(print)'}];
w.styleGen={
	gC2:()=>{const nC=namedColors;let s='';const gR=(p,c)=>{s+=`.${p},.${p}hov:hover,.${p}_b:before,.${p}_a:after{color:${c}} .${p}bg,.${p}bghov:hover,.${p}bghov:hover,.${p}bg_b:before,${p}bg_a:after{background-color:${c}}.${p}_brdr,.${p}_brdrhov:hover{border-color:${c}}.${p}_brdrt{border-top-color:${c}}.${p}_brdrr{border-right-color:${c}}.${p}_brdrb{border-bottom-color:${c}}.${p}_brdrl{border-left-color:${c}}`}, gS=(p,c)=>{s+=`.${p}{-webkit-text-stroke:.05em ${c}}`};nC.forEach(c=>{gR(c,c);gS(`${c}strk`,c)});sCL=Object.keys(siteColors?.lightColors).length+1;for(var i=1;i<sCL;i++){gR(`clr${i}`,`var(--clr${i})`);gR(`clr${i}tr`,`var(--clr${i}tr)`);gS(`clr${i}strk`,`var(--clr${i})`);gS(`clr${i}trstrk`,`var(--clr${i}tr)`)}mRules.forEach(({n,q})=>{s+=`@media${q}{`;nC.forEach((c,i)=>{gR(`${n}_${c}`,c);gS(`${n}_${c}strk`,c)});for(var i=1;i<11;i++){gR(`${n}_clr${i}`,`var(--clr${i})`);gR(`${n}_clr${i}tr`,`var(--clr${i}tr)`);gS(`${n}_clr${i}strk`,`var(--clr${i})`);gS(`${n}_clr${i}trstrk`,`var(--clr${i}tr)`)}s+='}'});return s},
	gC3:()=>{const nC=namedColors,seenPairs=new Set();let s='';for(let i=0;i<nC.length;i++){for(let j=0;j<nC.length;j++){if(i!==j){const pairKey=[nC[i],nC[j]].sort().join('_');if(!seenPairs.has(pairKey)){seenPairs.add(pairKey);for(let k=0;k<=360;k+=45){s+=`.${nC[i]}_${nC[j]}_${k}{background:linear-gradient(${k}deg,${nC[i]},${nC[j]});color:#0000;background-clip:text}`+`.${nC[i]}_${nC[j]}_${k}bg{background:linear-gradient(${k}deg,${nC[i]},${nC[j]})}`;if(i>=1&&i<=9&&j<=10)s+=`.clr${i}_clr${j}_${k}{background:linear-gradient(${k}deg,var(--clr${i}),var(--clr${j}));color:#0000;background-clip:text}`+`.clr${i}_clr${j}_${k}bg{background:linear-gradient(${k}deg,var(--clr${i}),var(--clr${j}))}`}}}}}return s},
	gc1:()=>{
		let s='';
		for(let i=-360;i<361;i+=5){s+='.rot'+i+'{transform:rotate('+i+'deg)}'}
		const pL=[['gp','gap'],['w','width'],['wmx','max-width'],['wmn','min-width'],['h','height'],['hmx','max-height'],['hmn','min-height'],['lh','line-height'],['fs','font-size'],['p','padding'],['pt','padding-top'],['pr','padding-right'],['pb','padding-bottom'],['pl','padding-left'],['m','margin'],['mt','margin-top'],['mr','margin-right'],['mb','margin-bottom'],['ml','margin-left'],['brdr','border-width'],['brdr_r','border-radius']];
		Object.entries(sidesMap).forEach(([ss,sn])=>{pL.push(['brdr'+ss,'border-'+sn+'-width'])});
		pL.forEach(([k,p])=>{for(let i=0;i<20;i+=0.1){if(i>=11&&!['w','wmx','wmn','h','hmx','hmn'].includes(k))continue;v=i.toFixed(1);s+=`.${k}${(v*10)}{${p}:${v}em}`}});
		for(let i=0;i<=1;i+=0.1){s+=`.op${Math.round(i*10)}{opacity:${i.toFixed(2)}}.ar${Math.round(i*10)}{aspect-ratio:${i.toFixed(2)}}`}
		Object.entries(sidesMap).forEach(([ss,sn])=>{brdrStyls.forEach(bs=>{s+=`.${bs}${ss}{border-${sn}-style:${bs}}`})});
		mRules.forEach(({n,q})=>{
			s+=`@media ${q}{`;
			for(let i=-360;i<361;i+=5){s+=`.${n}_rot${i}{rotate:${i}deg}`}
			pL.forEach(([k,p])=>{for(let i=0;i<20;i+=0.1){if(i>=11&&!['w','wmx','wmn','h','hmx','hmn'].includes(k))continue;v=i.toFixed(1);s+=`.${n}_${k}${(v*10)}{${p}:${v}em}`}});
			for(let i=0;i<=1;i+=0.1){s+=`.${n}_op${Math.round(i*10)}{opacity:${i.toFixed(2)}}.${n}_ar${Math.round(i*10)}{aspect-ratio:${i.toFixed(2)}}`}
			Object.entries(sidesMap).forEach(([ss,sn])=>{brdrStyls.forEach(bs=>{s+=`.${n}_${bs}${ss}{border-${sn}-style:${bs}}`})});
			s+='}';
		});
		return s
	},
	injStl:(id,cFn)=>{const el=crEl('style');el.id=id;setAtt(el,'nonce',att(findEl('[nonce]'),'nonce'));el.textContent=cFn();doc.head.appendChild(el);return el},
}
styleGen.injStl('dS',styleGen.gc1);styleGen.injStl('dS2',styleGen.gC2);styleGen.injStl('dS3',styleGen.gC3)