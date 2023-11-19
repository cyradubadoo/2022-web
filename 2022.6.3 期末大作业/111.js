    /*-----登录提示-----*/
    function Login(hh) { 
        alert(hh);
    }

    /*-----换肤-----*/
    function changeskin1(){
        document.body.style.backgroundImage='url(images/bg_1.png)';
        
    }
    function changeskin2(){
        document.body.style.backgroundImage='url(images/bg_2.jpg)';
    }
    function changeskin3(){
        document.body.style.backgroundImage='url(images/bg_3.jpg)';
    }

    /*-----div的显示与隐藏-----*/
    function baba(){
        var t = document.getElementById('ball');
        if(t.style.display === 'none') {
            t.style.display = 'block';// 以块级元素显示
        } else {
            t.style.display = 'none'; // 隐藏
        }
    }

    /*-----换元素-----*/
    function change1(){
        y=document.getElementById("banner")
        y.innerHTML='<img src="images/wxz.png" height: 300px;width: 500px; style="margin-left: 154px;"/>';
        x=document.getElementById("text2")
        x.innerHTML="书圣王羲之（303--361，一作321年-379年），东晋时期著名书法家，被誉为“书圣”，与其子王献之合称“二王”。王羲之兼善隶、草、楷、行各体，精研体势，心摹手追，广采众长，备精诸体，冶于一炉，摆脱了汉魏笔风，自成一家，影响深远。代表作有《黄庭经》《乐毅论》《十七帖》《兰亭集序》《初月帖》等，其中《兰亭序》被誉为“天下第一行书”。公元361年，王羲之卒于会稽金庭，葬于金庭瀑布山。";
    }
    function change3(){
        y=document.getElementById("banner")
        y.innerHTML='<img src="images/yzq.png" height: 300px;width: 500px; style="margin-left: 154px;"/>';
        x=document.getElementById("text2")
        x.innerHTML="颜真卿，（709--784），汉族，字清臣，京兆万年人，祖籍唐琅琊临沂（今山东临沂）。开元间中进士。安史之乱，抗贼有功，入京历任吏部尚书，太子太师，封鲁郡开国公，故又世称颜鲁公。德宗时，李希烈叛乱，他以社稷为重，亲赴敌营，晓以大义，终为李希烈缢杀，终年77岁。德宗诏文曰：“器质天资，公忠杰出，出入四朝，坚贞一志。”";
    }
    function change9(){
        y=document.getElementById("banner")
        y.innerHTML='<img src="images/zmf.png" height: 300px;width: 500px; style="margin-left: 154px;"/>';
        x=document.getElementById("text2")
        x.innerHTML="赵孟頫（1254--1322）字子昂，号松雪道人、水晶宫道人。宋太祖赵匡胤十一世孙，岐王赵德芳之后。宋朝灭亡后，元至元二十三年（1286），赵孟頫被推荐给元世祖忽必烈，受到重视，被任命为从五品官阶的兵部郎中，两年后任从四品的集贤直学士。至元二十九年（1292)，出任济南路总管府事。元贞元年（1295)，因世祖去世，成宗诏修《世祖实录》，赵孟頫被召回京城。至大三年（1310)，皇太子爱育黎拔力八达拜赵孟頫翰林侍读学士，知制诰-国史。次年五月，爱育黎拔力八达即位，是为仁宗。他登基不久，将赵孟頫升为从二品的集贤侍讲学士、中奉大夫。延祐三年（1316)，又升为翰林学士承旨、荣禄大夫，官居从一品。";
    }
    function change6(){
        y=document.getElementById("banner")
        y.innerHTML='<img src="images/ss.png" height: 250px;width: 500px; style="margin-left: 154px;"/>';
        x=document.getElementById("text2")
        x.innerHTML="苏轼（1037--1101），字子瞻，号东坡居士，眉州眉山（今属四川）人。他的家庭富有文学传统，祖父苏序好读书，善作诗。父亲苏洵是古文名家，曾对苏轼和其弟苏辙悉心指导。母亲程氏有知识且深明大义，曾为幼年的苏轼讲述《后汉书•范滂传》，以古代志士的事迹勉励儿子砥砺名节。当苏轼21岁出蜀进京时，他的学识修养已经相当成熟了。";
    }
    function change2(){
        y=document.getElementById("banner")
        y.innerHTML='<img src="images/oyx.png" height: 250px;width: 500px; style="margin-left: 154px;"/>';
        x=document.getElementById("text2")
        x.innerHTML="欧阳询（557--641），字信本，汉族，唐朝潭州临湘（今湖南长沙）人，唐朝著名书法家，官员，楷书四大家之一，南梁征南大将军欧阳頠之孙，南陈左卫将军欧阳纥之子，南朝梁太平二年（公元557年）出生于衡州（今湖南衡阳），祖籍潭州临湘（今湖南长沙）。欧阳询与同代的虞世南、褚遂良、薛稷三位并称初唐四大家。因其子欧阳通亦通善书法，故其又称“大欧”。 他与虞世南俱以书法驰名初唐，并称“欧虞”。";
    }
    function change4(){
        y=document.getElementById("banner")
        y.innerHTML='<img src="images/hs.png" height: 250px;width: 500px; style="margin-left: 154px;"/>';
        x=document.getElementById("text2")
        x.innerHTML=" 怀素怀素字藏真，今湖南长沙人。俗姓钱。自幼出家为僧。生于玄宗开元十三年（725），卒于 德宗贞元十五年（799），唐代明僧，为玄奘三藏法师之门人。于经禅之暇，颇好笔翰，尤好草书，自言得草书三昧。于故里零陵，广种芭蕉，以蕉叶代纸挥毫作书，因名所居曰绿天庵 。好饮，酒酣兴发，到处挥毫，人称为醉僧。以草书著名。是继张旭之后又一位狂草艺术家。 唐吕总《续书评》云：怀素草书，援毫掣电，随手万变。";
    }
    function change5(){
        y=document.getElementById("banner")
        y.innerHTML='<img src="images/lgq.png" height: 250px;width: 500px; style="margin-left: 154px;"/>';
        x=document.getElementById("text2")
        x.innerHTML="柳公权（778--865），字诚悬，汉族。兵部尚书柳公绰之弟，唐代书法家、诗人。官至太子少师，封河东郡公，以太子太保致仕，故世称“柳少师”。柳公权书法以楷书著称，与颜真卿齐名，人称“颜柳”，又与欧阳询、颜真卿、赵孟頫并称“楷书四大家”。他的书法初学王羲之，后来遍观唐代名家书法，认为颜真卿，欧阳询的字最好，便吸取了颜，欧之长，在晋人劲媚和颜书雍容雄浑之间，自创“柳体”，以骨力劲健见长，后世有“颜筋柳骨”的美誉。柳公权亦工诗，《全唐诗》存其诗五首，《全唐诗外编》存诗一首。";
    }
    function change7(){
        y=document.getElementById("banner")
        y.innerHTML='<img src="images/htj.png" height: 250px;width: 500px; style="margin-left: 154px;"/>';
        x=document.getElementById("text2")
        x.innerHTML="黄庭坚(1045--1105)北宋诗人、书法家。字鲁直,号山谷,又号涪翁。洪州分宁（今江西修水）人。黄庭坚自幼好学，博览经史百家。英宗治平四年(1067)登进士第。神宗熙宁时期，黄庭坚先后任汝州叶县(今属河南)尉、北京（今河北大名）国子监教授。元丰三年(1080)知吉州太和县（今属江西），政令清简平易。七年，移监德州德平镇。入京编修《神宗实录》,其间苏轼知贡举,曾聘为参详官。《实录》修成，黄庭坚迁起居舍人。死于贬所。黄庭坚为苏门四学士之首。";
    }
    function change8(){
        y=document.getElementById("banner")
        y.innerHTML='<img src="images/mf.png" height: 250px;width: 500px; style="margin-left: 154px;"/>';
        x=document.getElementById("text2")
        x.innerHTML="米芾，字元章，号襄阳居士、海岳山人等。汉族，后迁居湖北襄阳，长期居润州（今江苏镇江）。米芾曾任校书郎、书画博士、礼部员外郎。善诗，工书法，擅篆、隶、楷、行、草等书体，长于临摹古人书法，达到乱真程度。";
    }
    function change10(){
        y=document.getElementById("banner")
        y.innerHTML='<img src="images/dqc.png" height: 250px;width: 500px; style="margin-left: 154px;"/>';
        x=document.getElementById("text2")
        x.innerHTML="从白衣寒士到礼部尚书董其昌(1555—1636)，字玄宰，号香光，别号思白，明代南直隶松江府上海县(今属上海市)董家汇人。生于嘉靖三十四年(1555)一月十九日。 十七岁时，他参加松江府会考。当时他写了一篇很得意的八股文，自以为准可夺魁，谁知发榜时竟屈居堂侄董原正之下。原因是知府衷贞吉嫌他试卷上的字写得差，文章虽好，只能屈居第二。此事使董其昌深受刺激，从此他发愤学习书法。开始他以-颜真卿《多宝塔帖》为楷模，后来又改学魏、晋，临摹钟繇、王羲之的法帖。经过十多年的刻苦努力，董其昌的书法有了很大的进步，山水画也渐渐入门。";
    }