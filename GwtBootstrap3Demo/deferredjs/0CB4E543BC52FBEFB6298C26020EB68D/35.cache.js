function klc(){}
function _kc(a,b,c){Okb.call(this,a,b,c,(C$b(),B$b))}
function tlc(a){var b;if(!a.i){b=new ilc(new klc);a.i=b}return a.i}
function slc(a){var b;if(!a.g){b=new _kc(Xjb(slb(a.b)),tlc(a),rlc(a));nkb((tlb(a.b),b),Elb(tlb(a.b)));a.g=b}return a.g}
function ilc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;glb(this,(a=new NFb,Pyb(a,(b=new vBb(RBc),Pyb(b,(c=new IEb,c.b='Project Setup',HEb(c),c.c='basic setup and using custom themes',HEb(c),c)),Pyb(b,(d=new QEb,Pyb(d,(i=new aFb,_Eb(i,(j=new rCb(3),jGb(j.d,SBc),j)),i)),Pyb(d,(k=new TEb,Pyb(k,new eDb((n=new Drb,n.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new k$(n.b.b)).b)),Pyb(k,(o=new brc,EFb(o,(p=new Drb,p.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new k$(p.b.b)).b),J0(o.ab,VBc,true),o)),k)),d)),Pyb(b,(e=new QEb,Pyb(e,(q=new aFb,_Eb(q,(r=new rCb(3),jGb(r.d,'Bootstrap2 Look-a-like Setup'),r)),q)),Pyb(e,(s=new TEb,Pyb(s,new eDb((t=new Drb,t.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new k$(t.b.b)).b)),Pyb(s,(u=new brc,EFb(u,(v=new Drb,v.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new k$(v.b.b)).b),J0(u.ab,VBc,true),u)),s)),e)),Pyb(b,(f=new QEb,Pyb(f,(w=new aFb,_Eb(w,(x=new rCb(3),jGb(x.d,'Custom Theme'),x)),w)),Pyb(f,(y=new TEb,Pyb(y,new eDb((z=new Drb,z.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new k$(z.b.b)).b)),Pyb(y,(A=new brc,EFb(A,(B=new Drb,B.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new k$(B.b.b)).b),J0(A.ab,VBc,true),A)),y)),f)),Pyb(b,(g=new QEb,Pyb(g,(C=new aFb,_Eb(C,(D=new rCb(3),jGb(D.d,'Support for IE8'),D)),C)),Pyb(g,(E=new TEb,Pyb(E,new eDb((F=new Drb,F.b.b+='For support for IE8 you need to inherit the Respond module into your *.gwt.xml.',new k$(F.b.b)).b)),Pyb(E,(G=new brc,EFb(G,(H=new Drb,H.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n',new k$(H.b.b)).b),J0(G.ab,VBc,true),G)),E)),g)),b)),a))}
gZ(1285,534,Yvc,_kc);gZ(1288,539,Zvc,ilc);gZ(1289,1,{},klc);gZ(1296,1,ywc);_.Ab=function Jlc(){Xmb(this.c,slc(this.b.b))};var KU=Rpb(nBc,'SetupPresenter',1285),MU=Rpb(nBc,'SetupView',1288),LU=Rpb(nBc,'SetupView_BinderImpl',1289);Fwc(Rm)(35);