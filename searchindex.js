Search.setIndex({docnames:["doc_degradation","doc_generation","docstring/genalog.degradation","docstring/genalog.generation","docstring/genalog.ocr","docstring/genalog.text","generation_pipeline","index","installation","ocr_label_propagation","text_alignment"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["doc_degradation.md","doc_generation.md","docstring/genalog.degradation.rst","docstring/genalog.generation.rst","docstring/genalog.ocr.rst","docstring/genalog.text.rst","generation_pipeline.ipynb","index.md","installation.md","ocr_label_propagation.ipynb","text_alignment.ipynb"],objects:{"genalog.degradation":{degrader:[2,0,0,"-"],effect:[2,0,0,"-"]},"genalog.degradation.degrader":{Degrader:[2,1,1,""],ImageState:[2,1,1,""]},"genalog.degradation.degrader.Degrader":{apply_effects:[2,2,1,""],insert_image_state:[2,2,1,""],validate_effects:[2,2,1,""]},"genalog.degradation.effect":{bleed_through:[2,3,1,""],blur:[2,3,1,""],close:[2,3,1,""],create_2D_kernel:[2,3,1,""],dilate:[2,3,1,""],erode:[2,3,1,""],morphology:[2,3,1,""],open:[2,3,1,""],overlay:[2,3,1,""],overlay_weighted:[2,3,1,""],pepper:[2,3,1,""],pepper_then_salt:[2,3,1,""],salt:[2,3,1,""],salt_then_pepper:[2,3,1,""],translation:[2,3,1,""]},"genalog.generation":{content:[3,0,0,"-"],document:[3,0,0,"-"]},"genalog.generation.content":{ContentType:[3,1,1,""]},"genalog.generation.document":{Document:[3,1,1,""],DocumentGenerator:[3,1,1,""]},"genalog.generation.document.Document":{render_array:[3,2,1,""],render_html:[3,2,1,""],render_pdf:[3,2,1,""],render_png:[3,2,1,""],update_style:[3,2,1,""]},"genalog.generation.document.DocumentGenerator":{create_generator:[3,2,1,""],expand_style_combinations:[3,2,1,""],set_styles_to_generate:[3,2,1,""]},"genalog.ocr":{blob_client:[4,0,0,"-"],common:[4,0,0,"-"],grok:[4,0,0,"-"],metrics:[4,0,0,"-"],rest_client:[4,0,0,"-"]},"genalog.ocr.blob_client":{GrokBlobClient:[4,1,1,""]},"genalog.ocr.blob_client.GrokBlobClient":{create_from_env_var:[4,2,1,""],delete_blobs_folder:[4,2,1,""],get_folder_hash:[4,2,1,""],upload_images_to_blob:[4,2,1,""]},"genalog.ocr.metrics":{get_align_stats:[4,3,1,""],get_editops_stats:[4,3,1,""],get_metrics:[4,3,1,""],get_stats:[4,3,1,""],substitution_dict_to_json:[4,3,1,""]},"genalog.ocr.rest_client":{GrokRestClient:[4,1,1,""]},"genalog.ocr.rest_client.GrokRestClient":{create_datasource:[4,2,1,""],create_index:[4,2,1,""],create_indexer:[4,2,1,""],create_indexing_pipeline:[4,2,1,""],create_skillset:[4,2,1,""],delete_indexer_pipeline:[4,2,1,""]},"genalog.text":{alignment:[5,0,0,"-"],anchor:[5,0,0,"-"],conll_format:[5,0,0,"-"],lcs:[5,0,0,"-"],ner_label:[5,0,0,"-"],preprocess:[5,0,0,"-"],splitter:[5,0,0,"-"]},"genalog.text.alignment":{align:[5,3,1,""],parse_alignment:[5,3,1,""]},"genalog.text.anchor":{align_w_anchor:[5,3,1,""],find_anchor_recur:[5,3,1,""],get_anchor_map:[5,3,1,""],get_unique_words:[5,3,1,""],get_word_map:[5,3,1,""],segment_len:[5,3,1,""]},"genalog.text.conll_format":{check_n_sentences:[5,3,1,""],extract_ocr_text:[5,3,1,""],for_all_files:[5,3,1,""],propagate_labels_sentences:[5,3,1,""],propagate_labels_sentences_multiprocess:[5,3,1,""],remove_first_line:[5,3,1,""],remove_last_line:[5,3,1,""]},"genalog.text.lcs":{LCS:[5,1,1,""]},"genalog.text.ner_label":{GapCharError:[5,4,1,""],_propagate_label_to_ocr:[5,3,1,""],correct_ner_labels:[5,3,1,""],format_label_propagation:[5,3,1,""],format_labels:[5,3,1,""],propagate_label_to_ocr:[5,3,1,""]},"genalog.text.preprocess":{is_sentence_separator:[5,3,1,""],join_tokens:[5,3,1,""],remove_non_ascii:[5,3,1,""],split_sentences:[5,3,1,""],tokenize:[5,3,1,""]},"genalog.text.splitter":{find_split_position:[5,3,1,""],generate_splits:[5,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:exception"},terms:{"005":[0,6],"0th":10,"100":[1,5],"10px":3,"11px":1,"12px":[1,3,6],"1st":10,"200":10,"2003_test":5,"2012_train":5,"255":2,"2nd":10,"300":[0,1,3,6],"600":6,"6065412":[4,5],"break":5,"byte":[1,3,6],"case":5,"char":5,"class":[0,1,2,3,4,5],"default":[1,2,3,4,5,6,8,10],"enum":3,"final":10,"float":2,"function":[2,3,4,5,6,10],"import":[0,1,6,9,10],"int":[2,3,5],"long":[4,5],"new":[1,3,4,5,9,10],"return":[2,3,4,5,6,9,10],"short":9,"static":[2,3,4],"true":[0,1,3,4,5,6],"while":[0,6,10],And:[5,10],For:[0,2,5,6,7,9],LCS:5,NOT:5,ONE:[],One:4,The:[0,1,2,3,4,5,6,7,9,10],Then:5,There:3,These:[1,3,5],Uses:4,Using:4,With:[0,6],_clean_multi_token_label:[],_convert_to_begin_label:[],_convert_to_inside_label:[],_find_gap_char_candid:[],_format_align:10,_is_begin_label:[],_is_inside_label:[],_is_missing_begin_label:[],_is_multi_token_label:[],_propagate_label_to_ocr:5,_select_from_multiple_ner_label:[],abbrevi:3,abl:1,abov:[1,2,6],accept:6,account:4,accumul:5,accuraci:4,across:[6,8],actual:2,add:[0,1,2,4,5,7],add_subplot:0,addit:[7,8,10],aforement:6,after:[0,2,6,10],ahead:6,algorithm:5,align:[1,4,7,9],align_w_anchor:[5,10],aligned_gt:[5,9,10],aligned_nois:[5,10],aligned_ocr:[5,9],aling:9,all:[0,1,2,3,4,5,10],allow:[0,1,4],allow_redirect:[0,1,6],alog:7,alpha:[0,2,6],alphabet:5,also:[1,3,4,7],alter:[1,7],altern:1,amount:[0,2,6],analogdocumentgener:6,analysi:[4,5],anchor:10,anchor_map_gt:5,anchor_map_ocr:5,ani:[0,1,4,5,6,10],anoth:[0,4],api:[2,4],appear:5,appli:[0,1,2,5,6],apply_effect:[0,2],argument:[2,3,5,6,10],arnumb:4,around:4,arrai:[2,5],arrang:5,ascii:[1,5],assign:3,associ:1,assum:[3,4],assumpt:4,atom:5,attach:4,automat:[5,10],avail:[1,3,8],awai:0,azur:4,background:[0,2,6],base:[3,4,5],base_fold:5,baselin:5,batch:[4,6],batch_siz:6,becom:9,been:4,befor:[0,6],begin:9,begin_label:[],below:2,best:[5,10],beta:2,better:10,between:[4,5,7,10],bgr:3,bgra:3,big:[5,9,10],binari:[0,5],biopi:4,biopython:10,bitwis:2,black:0,bleed:[2,7],bleed_through:[0,2,6],blob:4,blob_account_nam:4,blob_kei:4,block:[6,7],blur:[2,6,7],bodi:[1,6],bold:1,book:[5,10],bool:[3,4,5],both:[5,10],boundari:2,breakag:5,buffer:5,build:1,bulk:5,cairo:8,calibri:3,call:[2,4,6,8],can:[0,1,3,4,5,6,7,9,10],candid:10,cannot:[0,10],capabl:[5,10],captur:4,case_sensit:5,cell:1,center:[],chang:[3,10],channel:3,charact:[0,4,5,10],check:[],check_existing_cach:4,check_n_sent:5,chip:0,citi:5,clean:5,clean_label:5,clean_label_ext:5,clean_labels_dir:5,clean_sent:5,clean_token:5,client:4,clone:8,close:[2,6,7],cmap:0,coat:4,code:[1,6],cognit:4,cognitive_service_kei:4,col:2,collect:[1,4,5],color:3,column:[1,4,6,7],com:[0,1,4,6,8],comb:5,combin:[0,1,3,7],common:[5,6],commonli:0,compil:3,composit:[1,3],compositecont:3,comput:5,concept:1,configur:1,conll2003_test:5,conll2012_train:5,conll:5,consist:[5,9],constant:[2,5,10],contain:[4,5,6,9],content:0,content_typ:1,contenttyp:[1,3],context:[3,9],continu:5,contract:[5,10],contrast:0,control:[1,3],convent:0,convert:[1,4],copi:[2,6],core:[1,6],corrdin:5,correct:[4,5],correct_ner_label:5,correspond:[2,5,6],count:4,counter:5,counterpart:1,cover:10,creat:[2,3,4,5,7,10],create_2d_kernel:[0,2],create_datasourc:4,create_from_env_var:4,create_gener:[1,3],create_index:4,create_indexing_pipelin:4,create_skillset:4,cross:[2,7],css:[1,3,7],current:[],current_st:[0,6],custom:[3,6],cv2:[0,2,6],d61:2,dark:[0,2],data:[4,5,6,7],datafram:4,dataset:[5,6,9],datasourc:4,datasource_container_nam:4,datasource_nam:4,datatsourc:4,decid:[],declar:[1,3],decod:1,deep:4,default_gener:1,default_style_combin:3,defin:[2,5,6],degrad:[5,7],degraded_fold:5,delet:4,delete_blobs_fold:4,delete_indexer_pipelin:4,delimit:5,demonstr:9,depend:[6,8],descript:4,design:[],dest_folder_nam:4,destin:4,destruct:[0,2],detail:[6,7,9],dict:[2,3,4,5],dictat:1,dictionari:[2,3,5,6],did:10,differ:[0,2,4,5,6],dilat:[2,6,7],dilate_w_elliptical_k:0,dilate_w_horizontal_k:0,dilate_w_lower_tri_k:0,dilate_w_plus_kernel:0,dilate_w_upper_tri_k:0,dilate_w_vertical_k:0,dilate_w_x_kernel:0,dir:5,direct:2,director:5,directori:5,disk:6,displai:[0,1,5,10],distanc:4,distribut:8,doc:[1,2,4,5],doc_gen:1,doc_gener:6,doc_sep:5,doc_seper:5,docstart:5,document:[4,5,9,10],document_gener:6,documentgener:[1,3],doe:4,doesn:4,done:4,dot:[1,6],down:[2,5],dpi:[0,3,6],dst:[0,2],dst_path:6,due:8,dynam:[2,10],each:[2,3,4,5,6,9,10],edit:4,edit_delet:4,edit_insert:4,edit_replac:4,effect:[0,3,4,6,7],effici:[5,7],element:[0,2,3,5,6,9],ellips:[0,2],ellipt:2,elliptical_kernel:0,els:5,elsewher:0,empti:[4,5],en_u:6,enabl:1,encoded_imag:6,encount:8,engin:[1,6],enki:5,enlarg:1,enlist:3,enrich:4,ensur:9,entiti:9,enumer:[0,1,2,3],environ:4,equal:5,erat:7,erod:[2,6,7],eros:[0,2],error:[2,4,8],etc:[1,7],evalu:[5,10],everi:5,ewyork:5,exampl:[0,1,2,3,5,6,7,9],example_:1,example_text_block:1,except:[4,5],exhaust:10,exist:4,exit:5,expand:[0,3],expand_style_combin:3,expect:4,ext:5,extend:10,extens:[5,10],extension_to_exclud:4,extra:10,extract:[0,5],extract_ocr_text:5,factor:[2,3],fals:[3,5],famili:[1,7],familiar:1,far:8,fast:[5,7,10],faster:5,few:5,field:6,fig:0,figsiz:0,figur:0,file:[1,3,4,5,6],filenam:[3,4,6],filepath:3,fill:[1,2],find:[1,5,6,10],find_anchor_recur:5,find_split_posit:5,first:[5,6,9],flip:2,focu:0,foggi:0,folder:[4,5,6],folder_hash:4,folder_nam:4,follow:[0,1,2,3,4,5,6,10],font:[1,7],font_famili:[1,3,6],font_siz:[1,3,6],fontsiz:0,for_all_fil:5,forc:5,force_doc_sep:5,foreground:[0,2],format:[5,7,9],format_label:[5,9],format_label_propag:[5,9],found:8,four:10,fragment:5,from:[0,1,2,3,4,5,6,7,8,9,10],full:[5,6],func:5,gamma:2,gap:[4,5,10],gap_char:[4,5,9,10],gap_char_set:5,gap_ext_penalti:10,gap_penalti:10,gapcharerror:5,gaussianblur:2,gdk:8,gen:7,genalog:[0,1,6,7,8,9,10],gener:[0,1,4,5,8],generate_dataset_multiprocess:6,generate_img:6,generate_split:5,get:[0,1,4,5,6],get_align_stat:4,get_anchor_map:5,get_editops_stat:4,get_folder_hash:4,get_metr:4,get_stat:4,get_unique_word:5,get_word_map:5,git:8,github:8,githubusercont:[0,1,6],give:4,given:[0,1,2,4,5],goal:1,grai:0,grayscal:3,grok:5,grokblobcli:4,grokrestcli:4,ground:[5,9,10],grouth:[9,10],grow:2,gt_folder:5,gt_label:[5,9],gt_to_nois:10,gt_to_noise_map:[5,10],gt_to_ocr_map:5,gt_token:[5,9],gt_txt:[5,9,10],had:4,has:[0,1,4,5,6,8,10],hash:4,have:[0,4,5,8,9,10],hazi:0,help:5,henc:4,here:[0,1,4,5,7],higher:0,highest:10,hipr2:2,hold:[],homepag:2,horizont:2,horizontal_kernel:0,host:4,how:[9,10],howev:[0,2,8],htm:2,html:[1,2,3,5,7],html_templat:6,http:[0,1,2,4,5,6,8],huge:5,hybrid:[],hyperparamet:10,hyphen:[1,3,6],hyphens_al:5,idea:5,identifi:5,ieee:[4,5],ieeexplor:[4,5],imag:[1,3,4,7,8],image_byt:1,imagest:[0,2,6],imagin:9,imencod:6,img_arrai:6,img_resolut:6,imit:0,implement:[5,7,10],imread:0,imread_grayscal:0,imshow:0,inch:[1,3,6],includ:[1,5,8],index:[4,5],index_nam:4,indexer_nam:4,indic:5,individu:5,inf:2,inform:[0,1,2,6],inherit:1,init:6,initi:[3,6],ink:[0,6,7],input:[0,1,4,5,9,10],input_dir:5,input_fil:5,insert:[4,5,10],insert_image_st:2,insid:9,inside_label:[],instal:7,instruct:8,integ:2,intend:3,interchang:[5,10],interest:0,interfac:6,interpret:9,invalid:5,invari:5,iob:9,ipynb:6,ipython:[1,6],is_sentence_separ:5,isbig:5,isi:5,issu:[],item:1,iter:[3,5],its:[0,3,5],jinja2:[1,3],jinja:[1,5,6],jinjia2:3,join:[0,5],join_token:5,json:[4,5],jsp:4,justifi:[1,6],kei:[3,4],kernel:2,kernel_morph:[],kernel_shap:[0,2,6],kernel_typ:[0,2,6],keyword:[2,3,6,10],kis:5,kwarg:[2,3],label:[5,10],label_indic:[],label_top:5,langaug:1,languag:6,larger:[0,5],last:[0,5,6,10],later:8,layer:0,layout:[1,7],layouttext:4,len:[1,5],length:5,less:[0,2],letter:[1,6,7],level:[4,5],levenshtein:4,leverag:7,libcairo:8,librari:[0,8],like:[0,2,3,4,6,7,8],line:5,line_sep:5,link:0,linux:8,list:[1,2,3,4,5,6,9],load:[0,1,3],local:4,locat:[3,5],longer:[5,10],longest:5,look:[0,4],low:5,lower:[0,2,6,7],lower_tri_kernel:0,lower_triangl:[0,2],lumin:2,maco:8,mai:1,main:[0,1,6],make:4,manag:4,mani:[1,5],map:[4,5,10],mar:5,mari:5,master:2,match:[3,10],match_reward:10,matplotlib:0,matrix:2,max:5,max_align_segment_length:5,max_seg_length:5,maximum:5,md5:4,mean:9,messag:5,method:[2,3,5,6,9],method_kwarg:2,method_nam:2,microsoft:[0,1,4,6,8],mimic:[0,6,7],min_anchor_len:5,minimum:5,mismatch:10,mismatch_penalti:10,miss:[5,8],mock:1,modul:0,monitor:4,more:[0,2,5,6,7,9],morphilog:[6,7],morpholog:[2,6],most:[0,1,6,10],mostli:3,much:10,multi:[5,7],multipl:[0,1,2,5,6,10],multiprocess:4,multithread:5,must:[2,3,4,5],name:[0,1,2,4,5,6,7,9],ndarrai:[2,3,6],need:[1,4,5,6,8,9],neee:5,neg:2,ner:[5,10],ner_label:9,new_char:10,new_style_combin:1,newyork:5,next:[6,10],nois:[2,5,7,10],noise_to_gt:10,noise_to_gt_map:[5,10],noise_txt:10,noisi:[5,9,10],non:[5,8],non_ascii_replac:5,none:[2,3,4,5,6],nose:5,nosii:9,nositi:10,note:[3,5,10],now:9,num_token:5,number:[5,6],numpi:[2,3,6],object:[1,2,3,6],obtain:9,occur:0,occurr:5,ocr:[5,9,10],ocr_json_path:4,ocr_label:[5,9],ocr_token:[5,9],ocr_txt:[5,9],ocrproject:4,odd:2,off:5,offset:2,offset_i:[0,2,6],offset_x:[0,2,6],onc:[1,6,7],one:[0,2,5,6],ones:[0,2],ongo:4,onli:[5,10],onto:[0,1,2,6,7,9],open:[2,6,7],opencv:2,oper:[0,2,4,6,7],opitc:10,opposit:0,ops:4,option:[1,2,3,4,5],optionsl:3,order:5,org:[2,4,5],origin:[0,2,4,5,6,10],original_st:[0,2,6],other:[0,3,8,9],otherwis:[3,6],our:[0,1,6,10],ourput:5,out:[0,10],output:[0,3,4,5,9],output_dir:5,output_fil:5,output_fold:5,output_labels_dir:5,output_text_dir:5,over:6,overflow:[5,6,7],overlai:[0,2],overlay_weight:2,overview:[],pack:5,packag:[3,6,7,10],page:[0,3,5,10],pair:[1,3,5],panda:4,pango:8,paper:[4,5,10],paragraph:1,parallel:6,paramet:[2,3,4,5,10],pars:5,parse_align:[5,10],part:[],path:[1,4,5,6],pdf:[1,3,6],penal:10,penalti:10,pepper:[2,6,7],pepper_amount:2,pepper_then_salt:2,per:[1,3,6],percentag:0,perform:4,perspect:0,pick:7,piec:5,pip:[7,8],pipelin:[4,6],pixbuf:8,pixel:[0,2,3,6],place:[5,9],plamet:5,planet:5,platform:7,pleas:[0,5,6,8],plt:0,plu:[0,2,6],plus_kernel:0,png:[0,1,3,4,6],point:5,pool:5,popul:3,posit:[1,2,5],possibl:[1,3,5,10],post:4,preced:[],prefix:4,prepar:6,preprocess:9,preserv:5,previou:0,previous:4,print:[0,1,5,6,7,9,10],printabl:[],printer:0,privat:[],probabl:8,problem:9,process:[0,4,5,9,10],produc:[3,10],program:10,programmat:6,project:4,projections_container_nam:4,propag:[5,10],propagate_label_to_ocr:[5,9],propagate_labels_sent:5,propagate_labels_sentences_all_fil:5,propagate_labels_sentences_multiprocess:5,proper:0,properli:[0,1],properti:[1,3,6,7],proport:2,provid:[0,1,3,6,7,10],purpos:[3,7],push:4,pyplot:0,python:[1,3,4,5,7,8,10],qualiti:[6,7],quicker:5,quickstart:4,radiu:[0,2,6],rais:[2,4,5],ran:10,random:2,random_nois:2,randomli:[0,2],rang:2,raw:[0,1,6],rbf:2,read:[],reader:5,real:0,recal:10,recognit:[9,10],recommend:[5,10],recurs:[5,10],refer:[0,2,4,5,6],referenc:0,reflect:3,relat:10,releas:10,reli:5,remind:5,remov:[2,5,10],remove_first_lin:5,remove_last_lin:5,remove_non_ascii:5,render:[3,6],render_arrai:3,render_html:3,render_pdf:[1,3],render_png:[1,3],replac:[1,2,4,5],repo:[0,1,6],repres:3,represent:3,request:[0,1,6],requir:4,resolut:[1,3,6],respect:3,rest:[4,9],result:[0,3,4,5],retain:0,retriev:1,reward:10,rgb:3,rgba:3,rid:[],right:2,rki:[9,10],root:[],row:[2,4],run:[0,4,5,6,8,9],rune:4,sake:6,salt:[2,6,7],salt_amount:2,salt_then_pepp:2,same:[0,2,4,5,6,10],sampl:1,sample_img:0,sample_img_url:0,sample_text:6,sample_text_url:[0,1,6],satisfi:5,save:[1,3,6],scace:5,scale:6,scan:7,scanner:0,scarc:5,scheme:[5,10],scikit:2,score:10,sdk:4,search:[4,5,10],search_service_kei:4,search_service_nam:4,searchservic:4,second:6,section:1,see:[0,2,4,6,7,8,9],seek:5,seepag:0,segeo:6,segment:[4,5],segment_len:5,select:1,self:3,sensit:5,sentenc:5,sentence_seper:5,separ:[3,5,8],seper:5,sequenc:[0,2,5,6],servic:4,set:[3,5,6],set_styles_to_gener:[1,3],sever:7,shape:2,share:[5,10],shift:2,shorter:10,should:5,show:[0,1,5],show_align:5,shuge:5,side:[0,3,6,7],similar:5,simpl:[6,7],sinc:4,singl:[3,5],situat:10,size:[1,2,7],skillset:4,skillset_nam:4,skimag:2,skip:0,slow:5,smaller:5,snippet:1,some:[5,7],someth:5,sourc:[0,1,2,3,4,5,6,7,8],source_substr:4,space:[4,5],special:4,specif:1,specifi:[1,5,6],split:[1,5,6],split_it:5,split_pag:3,split_sent:5,sprinkl:[0,2],squar:2,src:[0,2,4,6],src_folder_path:4,src_string:4,src_text_path:4,src_token:5,stabl:2,stamp:4,standard:[0,1,6,7],start:[4,5,6,7],start_po:5,start_pos_gt:5,start_pos_ocr:5,stat:4,state:[0,6],statist:4,step:0,storag:4,store:4,str:[2,3,4,5],str_m:5,str_n:5,string:[3,4,5,10],structur:[0,2],style:3,style_combin:[3,6],styles_to_gener:1,subject:0,submodul:0,subprocess:6,subsequ:5,subset:5,substit:4,substitut:4,substitution_dict:4,substitution_dict_to_json:4,substr:4,suffix:4,suitabl:[],suppli:6,support:[1,2,4,6,8],synthet:[1,10],synthetic_dataset:5,tabl:1,tackl:[],tag:9,take:[],target:[1,3,4],target_fold:6,target_substr:4,templat:[3,4,7],template_env:3,template_list:1,template_nam:[1,5],template_path:[3,6],templates_to_rend:3,test:[3,5],test_subset:5,text:[0,1,4,7,9],text_align:[1,6],text_block:[1,5,6],text_zoom:0,than:[0,2,5,10],thei:[4,5],them:6,thi:[0,1,2,3,4,5,6,7,8,9,10],thing:5,those:10,though:4,threadpool:5,three:[1,6,8],threshold:5,through:[2,7,9],thu:[0,5,7],tightli:5,time:[1,3],titl:[0,1],titled_cont:1,togeth:[0,2],token:[5,10],tool:[5,7],top:5,total:4,train:5,train_subset:5,transform:4,translat:2,transpar:2,tri:0,triangular:2,trigger:5,truth:[5,9,10],tune:10,tupl:[2,4,5,6,9],turn:[5,8],tutori:6,tutorial_py_morphological_op:2,two:[1,2,4,5,6,7,10],txt:[1,4,5,6],type:[1,2,3,4,5],typic:[5,9],ubuntu:8,uint8:2,undefin:3,underscor:4,understand:10,unequ:5,unicod:3,uniqu:5,unique_word:5,unit:[1,3,6],unless:[],updat:3,update_styl:3,upload:4,upload_images_to_blob:4,upper:2,upper_tri_kernel:0,upper_triangl:[0,2],usag:5,use:[0,1,3,4,5,6,10],use_anchor:5,use_async:4,use_multiprocess:4,used:[0,1,3,4,5,6],useful:[0,10],using:[1,4,7,10],util:[2,4,5,9],valid:[2,3,6],validate_effect:2,valu:[1,2,3,4,6,10],valueerror:[2,4,5],variabl:[3,4],variou:7,veri:4,versa:[5,10],version:9,vertical_kernel:0,via:[1,2,3,5],vice:[5,10],visibl:0,visual:10,w3c:6,wai:[0,7],want:[0,1],weasyprint:[1,3,6,8],weight:[2,10],welcom:0,well:1,when:[0,2,5],where:[2,5,6],wherea:9,whether:5,which:[4,6,8],white:[0,2],whiten:0,whitespac:10,whose:3,width:6,without:[1,5],wom:4,word:[4,5],word_index:5,word_map:5,work:10,world:0,worn:4,would:[],wrapper:[2,3,4],write:[0,5,6],write_pdf:3,write_png:3,written:[3,10],x_kernel:0,yield:3,york:[5,9,10],yorki:[],you:[0,1,3,4,6,7,8,10],zoom:3},titles:["Degrade a document","Create a document","genalog.degradation","genalog.generation","genalog.ocr","genalog.text","Generate your synthetic document","Synthetic Document Generator","Installation","Propagation of NER labels","Text alignment"],titleterms:{"final":9,Into:1,advanc:[0,10],after:9,algorithm:10,align:[5,10],anchor:5,bleed:0,blob_client:4,blur:0,chang:1,choos:6,close:0,combin:6,common:4,compositecont:1,configur:[0,6,10],conll_format:5,content:[1,3,6],creat:1,css:6,degrad:[0,2,6],degrat:2,dilat:0,displai:[6,9],document:[0,1,3,6,7],download:0,effect:2,erod:0,extra:8,format:10,from:[],genalog:[2,3,4,5],gener:[3,6,7],grok:4,html:6,imag:[0,2,6],initi:1,instal:8,interpret:10,kernel:0,label:9,lcs:5,load:6,mac:8,method:10,metric:4,modul:[3,4,5],morpholog:0,multi:6,needleman:10,ner:9,ner_label:5,nois:0,ocr:4,open:0,pepper:0,popul:1,prebuild:6,preprocess:5,process:6,propag:9,raw:[],rest_client:4,result:[9,10],reta:10,salt:0,sampl:[0,6],shape:0,size:0,splitter:5,step:8,style:[1,6],synthet:[6,7],templat:[1,6],text:[5,6,10],through:0,token:9,user:8,window:8,wunsch:10,your:6}})