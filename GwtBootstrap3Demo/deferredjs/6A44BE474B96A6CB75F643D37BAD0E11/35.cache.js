function hhc(){}
function Ygc(a,b,c){Dhb.call(this,a,b,c,(iXb(),hXb))}
function qhc(a){var b;if(!a.g){b=new fhc(new hhc);a.g=b}return a.g}
function phc(a){var b;if(!a.f){b=new Ygc(Mgb(hib(a.a)),qhc(a),ohc(a));chb((iib(a.a),b),tib(iib(a.a)));a.f=b}return a.f}
function fhc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;Xhb(this,(a=new yCb,Cvb(a,(b=new hyb(Jvc),Cvb(b,(c=new tBb,c.a='Project Setup',sBb(c),c.b='basic setup and using custom themes',sBb(c),c)),Cvb(b,(d=new BBb,Cvb(d,(i=new NBb,MBb(i,(j=new czb(3),WCb(j.c,Kvc),j)),i)),Cvb(d,(k=new EBb,Cvb(k,new Szb((n=new hob,On(n.a,'For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.'),new WW(Tn(n.a))).a)),Cvb(k,(o=new jmc,pCb(o,(p=new hob,On(p.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n'),new WW(Tn(p.a))).a),qZ(o._,Nvc,true),o)),k)),d)),Cvb(b,(e=new BBb,Cvb(e,(q=new NBb,MBb(q,(r=new czb(3),WCb(r.c,'Bootstrap2 Look-a-like Setup'),r)),q)),Cvb(e,(s=new EBb,Cvb(s,new Szb((t=new hob,On(t.a,'For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.'),new WW(Tn(t.a))).a)),Cvb(s,(u=new jmc,pCb(u,(v=new hob,On(v.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n'),new WW(Tn(v.a))).a),qZ(u._,Nvc,true),u)),s)),e)),Cvb(b,(f=new BBb,Cvb(f,(w=new NBb,MBb(w,(x=new czb(3),WCb(x.c,'Custom Theme'),x)),w)),Cvb(f,(y=new EBb,Cvb(y,new Szb((z=new hob,On(z.a,'1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.'),new WW(Tn(z.a))).a)),Cvb(y,(A=new jmc,pCb(A,(B=new hob,On(B.a,"&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n"),new WW(Tn(B.a))).a),qZ(A._,Nvc,true),A)),y)),f)),Cvb(b,(g=new BBb,Cvb(g,(C=new NBb,MBb(C,(D=new czb(3),WCb(D.c,'Support for IE8'),D)),C)),Cvb(g,(E=new EBb,Cvb(E,new Szb((F=new hob,On(F.a,'For support for IE8 you need to inherit the Respond module into your *.gwt.xml.'),new WW(Tn(F.a))).a)),Cvb(E,(G=new jmc,pCb(G,(H=new hob,On(H.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n'),new WW(Tn(H.a))).a),qZ(G._,Nvc,true),G)),E)),g)),b)),a))}
NV(1261,522,aqc,Ygc);NV(1264,527,bqc,fhc);NV(1265,1,{},hhc);NV(1272,1,Eqc);_.vb=function Ghc(){Mjb(this.b,phc(this.a.a))};var cS=Emb(fvc,'SetupPresenter',1261),eS=Emb(fvc,'SetupView',1264),dS=Emb(fvc,'SetupView_BinderImpl',1265);Iqc(um)(35);