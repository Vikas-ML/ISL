#!/usr/bin/env python
# coding: utf-8

# In[1]:


from nltk.tree import *
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from nltk.corpus import wordnet
import nltk
from nltk.tokenize import RegexpTokenizer
from pattern.en import conjugate, PRESENT
import speech_recognition as sr  
import os
import json
from moviepy.editor import *
import contractions
from benepar.spacy_plugin import BeneparComponent
import spacy
nlp = spacy.load('en_core_web_sm')
nlp.add_pipe(BeneparComponent('benepar_en3'))

#our dataset
dictionary_words=['above','accept','accident','action','address','advice','aeroplane','after','air','all','allow','always',
        'ambulance','angry','animal','apple','arm','art','autorickshaw'
        'baby','ball','balloon','banana','bank','bat','bathroom','bed','behind','big','bird','birthday','black','breathe','buy',
        'cake','calculator','call','camera','car','cash','cat','chocolate','clap','cloth','computer','cricket','cry',
        'dance','date','deaf','diesel','discount','diwali','do','dog','drink',
        'eat','education','egg','elephant','enjoy','eraser','exercise','eye',
        'face','fan','festival','film','fire','fish','football','free','friend','fruit',
        'ganapathi','girl','give','glass','go','green',
        'health','hear','heart','heat','heavy','helicopter','help','her','herself','hide','high','him','hindi','his','hold',
        'home','horse','hospital','how','hungry','husband',
        'i','identification','illegal','immediate','import','important','in','inch','income','increase','independent','index',
        'india','individual','infinity','information','initial','injection','input','installation','insult','interest',
        'introduce','inverse','iron','item','it','itself',
        'jail','jealous','job','join','juice','jump','june','junior','justice',
        'kanpur','keep','key','kick','kill','king','kiss','kite','know','knowledge',
        'labour','land','late','laugh','lazy','learn','leave','left','leg','less','letter','level','library','light','like',
        'lip','liquid','list','litre','little','local','lock','long','longitude','loose','lose','loud','love','lunch',
        'magic','magnet','mail','major','man','mango','mark','maximum','me','meet','money','month','more','music','myself',
        'natural','neck','need','neighbour','new','next','night','no','not','noon','nose','nosie','note','notice','now',
        'object','october','of','office','old','on','only','open','our','out','output','overdue'
        'Page','Pain','Pant','Paper','Pay','Percentage','Perfect','Play','Poor','Positive','Power','Practice','Process',
        'Product','Put',
        'Quailty','Question','Quit',
        'Read','Refund','Reject','Remove','Result','Return','Reward','Right','Risk',
        'She','Sad','Salt','Stop','Same','Solve','Sorry','Satisfied','Strong','Student','Study','Smile','Small','Self','Sister',
        'Transfer','Talk','Travel','Tight','Target','Time','Taste','Then', 'To','Try','Tomorrow','Total','Thing','This',
        'Temporary','Trust','Table',
        'Up','Us',
        'Vegetables','Vehicle','Village','Vision','Visit','Volume',
        'Walk','want','Way','We','Weak','Who','Why','Win','Wish','Wrong',
        
        'Year','Yesterday','You','Your',
        'Zebra','Zone']
dictionary_words = [w.lower() for w in dictionary_words]

syn_dic={'identification':['identity','id','pehchan','recognisance','recognition','recognizance','memento','souvenir','spotting'
                            ,'badge','naming',],
          'illegal':['lawless','outlawed','unauthorized','illicit','verboten','illegitimate','unlawful','outrule','wrongful',
                     'prohibited','bootlegged','malfeasance','misfeasance','crime','banned','unethical ','unconstitutional',
                     'actionable','illegally','unauthorised','unlicenced '],
          'immediate':['instant','now','quick','urgent','instantaneous','fast',
                       'important','directly','immediately','instantaneously','immediacy','instantaneity','imminent'],
          'import':['convey','imported','importer','shipment'],
          'important':['precious','considerable','significant','essential','crucial','foremost','valuable','necessary','mattering',
                       'pivotal','vital','major','urgent','useful'],
          'in':['inwards','throughout','within','among','inside','toward'],
          'inch':['measurement','unit'],
          'income':['revenue','earnings','net income','salary','livelihood'],
          'increase':['boost','escalation','progress','strengthen','boom','grow','elevate','expansion','addition','groundswell',
                     'accelerate','increased','incremental','extension','growth','hike','amplify','escalate','propagation',
                     'increasing','raise','prolong'],
          'independent':['independence','fair','individualistic','separate','objective','autonomous','free','uncontrolled',
                         'autonomy','dependence','freelancer','independant','indepedent','individual'],
          'index':['glossary','token','pointer','indices','list','record','catalog','table','indexes','listing','appendix',
                  'tabulate'],
          'india':['bharat','hindustan','indian'],
          'individual':['alone','singular','personal','own','self','particular','be','lone','personalized','only','single',
                       'specific','independent','individuality','individually','individualized'],
          'infinity':['immeasurableness','extent','ellipse','infiniteness','unlimitedness','infinitude','unboundedness',
                     'infinite','endlessness'],
          'information':['message','data','lore','news','info','detail'],
          'initial':['first','introductory','primary','basic','beginning','incipient','initially','letter','early','start'],
          'injection':['dose','vaccination','inject','shot','jab','inoculation','hypodermic','injectant'],
          'input':['enter','insert'],
          'installation':['installing','install','fitting','establishment','establishment','start','emplacement','enthronement',
                         'placing','instatement','setup','installed'],
          "insult":['snub','disgrace','offense','dishonor','shame','affront','defamation','contempt','mortification','scandal',
                   'disdain','reproach','scorn','spurn','mock','abasement','Derogation','Dishonour','disrespectfulness',
                    'humiliations','Inappreciation'],
          'zone':['area','sector','section','belt','region','territory','tract','stretch','expanse','district','quarter','precinct','locality','neighbourhood','province','land'],
          'year': ['age','day','epoch','era','period','time','yearly','annual'],
          'yesterday':['bygone','past','foretime','recently'],
         'you':['yourself','thee'],
         'your':['endemic','hers','individual','intrinsic','its','mine','inherent','yours'],
         'walk':['stroll','saunter','amble','trudge','plod','hike','tramp','trek','march','stride','troop','patrol','wander','ramble','tread','prowl','footslog','promenade','roam',
          'traipse','advance','proceed','move','go','mosey','pootle','yomp','perambulate','accompany','escort','stroll','saunter','amble','promenade','ramble','hike',
'tramp','march','constitutional','turn','airing','excursion','outing','breather','route','beat','round','run' ],
    'we':['individually','personally','privately'],
    'weak':[
'frail','feeble','puny','fragile','delicate','weakly','infirm','sick','sickly','shaky','debilitated','incapacitated','ailing','indisposed',
'decrepit','enervated','tired','fatigued','exhausted','spent','weedy','dim','pale','wan','faint','dull','feeble','muted'],
    'who':['whom','whichever','whose'],
    'why':['reason'],
    'win':['achieve','victory','triumph','succeed','persuade','conquer','acquire','accomplish'],
    'wish':['accomplish','desire','hope','prayer','goal','dream','want'],
    'wrong':['misfigured','misconstrued','incorrect','immoral','wicked','ungodly','false','error'],
    'vegetable':['succories','clods','legumes','herbs','greens'],
    'vehicle':['transportation','transport','carrier','fomite','car','lorry','motorcycle'],
    'village':['hamlet','settlement','microcosm','community','pueblo','town'],
    'vision':['fantasy','sight','image','mirage','divination','illusion','foresight','eyesight','insight','imagination'],
     'visit':['sojourn','stay','visitation','tour','vacation',],
    'volume':['bulk','bulky','huge','multitudinous','voluminous'],
    
         }
syn_dic['taste'] = ['tasty']
syn_dic['i'] = ['my','mine']
syn_dic['hide'] = ['conceal','hideous','stash']


#model_code


def model(inputString):
    #for taking input
    '''if inpu == 1:
        r = sr.Recognizer()  

        with sr.Microphone() as source:
            print("Talk")
            audio_text = r.listen(source)
            print("Time over, thanks")
            try:
                inputString= r.recognize_google(audio_text).lower()
            except:
                print("Sorry, I did not get that")
    else:
    '''
    inputString = inputString.lower()
    print(inputString)
    
    #model code
    
    inputString=contractions.fix(inputString)
    tokenizer = RegexpTokenizer(r'\w+')
    inputString = tokenizer.tokenize(inputString)

    words_inter=['am', 'are', 'can', 'could', 'did', 'do', 'does', 'had', 'has', 'have', 'how', 'is', 'may','shall','should','were',
                 'what','when', 'where','whether','which','who','whom','whose', 'why', 'will', 'would'] 
    if inputString[0] in words_inter:
        start_word= inputString[0]
        inter=1
        inputString=inputString[1:]
    else:
        inter=0

    inputString=' '.join(inputString)

    doc = nlp(inputString)
    sent = list(doc.sents)[0]
    if isinstance(sent, spacy.tokens.span.Span):
        tree = Tree.fromstring(sent._.parse_string)
    else:
        tree = Tree.fromstring(sent)

    parenttree= ParentedTree.convert(tree) 
    isltree=Tree('ROOT',[])
    dic={}
    for sub in parenttree.subtrees(): 
        dic[sub.treeposition()]=0
    i=0

    for sub in parenttree.subtrees():
        if(sub.label()=="NP" and dic[sub.treeposition()]==0 and dic[sub.parent().treeposition()]==0 and len(sub.leaves())==1):
            dic[sub.treeposition()]=1
            isltree.insert(i,sub)
            i=i+1
        if(sub.label()=="VP" or sub.label()=="PRP"):
            for sub2 in sub.subtrees():
                if((sub2.label()=="NP" or sub2.label()=='PRP')and dic[sub2.treeposition()]==0 and 
                        dic[sub2.parent().treeposition()]==0 and len(sub2.leaves())==1):
                    dic[sub2.treeposition()]=1
                    isltree.insert(i,sub2)
                    i=i+1

    for sub in parenttree.subtrees():
        for sub2 in sub.subtrees():
            if(len(sub2.leaves())==1 and dic[sub2.treeposition()]==0 and dic[sub2.parent().treeposition()]==0 and 
                             len(sub2.leaves())==1):
                dic[sub2.treeposition()]=1
                isltree.insert(i,sub2)
                i=i+1
    words=isltree.leaves()
    if(inter==1):
        words.append(start_word)

    stop_words=['be','as','am','for','than','a','an','the','of', 'been', 'being','and','but','if','or','because','as','while','by',
                'for','such','own','so','than','too','very','just',"'s"]

    def get_wordnet_pos(tag):
        """Map POS tag to first character lemmatize() accepts"""
        tag_dict = {"J": wordnet.ADJ,
                    "N": wordnet.NOUN,
                    "V": wordnet.VERB,
                    "R": wordnet.ADV}

        return tag_dict.get(tag, wordnet.NOUN)

    def get_key(val): 
        for key, value in syn_dic.items(): 
            if val in value: 
                return key 
        return "key doesn't exist"

    lemmatizer = WordNetLemmatizer()
    lemmatized_words=[]
    for w in words:
        try:
            tag= pos_tags_dic[w]
        except:
            tag = nltk.pos_tag([w])[0][1][0].upper()
        try:
            if (tag == 'V'):
                w = conjugate(verb=w,tense=PRESENT)
        except:
            w=w
        lemmatized_words.append(lemmatizer.lemmatize(w,get_wordnet_pos(tag)))
    islsentence = ""
    print(lemmatized_words)
    final_output_array=[]
    for w in lemmatized_words:
        if w not in stop_words:
            if w in dictionary_words:
                islsentence+=w
                islsentence+=" "
                final_output_array.append(w)
            else:
                key=get_key(w)
                if(key=="key doesn't exist"):
                    islsentence+=w
                    islsentence+=" "
                    final_output_array.append(w)
                else:
                    islsentence+=key
                    islsentence+=" "
                    final_output_array.append(key)

    print(islsentence)

    clips=[]
    root='C:\\Users\\vikas\\Desktop\\ML\\notebooks\\ISL\\takingdata\\ISL'
    for words in final_output_array:
        capital = words.capitalize()
        first_letter= words[0].upper()
        try:
            filePath = os.path.join(root, first_letter,capital+'.mp4')
            clips.append(VideoFileClip(filePath))
            print(words)
        except:
            clip=[]
            spl=list(words.upper())
            print(spl)
            clip = [ImageClip(os.path.join(root, 'Letters',m+'.jpg')).set_duration(1) for m in spl]
            clips.append(concatenate_videoclips(clip, method="compose"))

    final = concatenate_videoclips(clips)
    final.resize(width=480).ipython_display(width = 480)

