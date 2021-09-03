![developer](https://img.shields.io/badge/Developed%20By%20%3A-Vikas%20Yadav-green)
![developer](https://img.shields.io/badge/Developed%20By%20%3A-Shubh%20Tripathi-red)

# English_to_IndianSignLanguage
ISL is a project to enhance the communication between normal people and people with hearing disabilities. It can also be used to learn indian sign language.

## Introduction
Sign language is a visual means of communicating through hand signals, gestures, facial expressions, and body language. It’s the main form of communication for the Deaf and Hard-of-Hearing community, but sign language can be useful for other groups of people as well.

ISL(Indian Sign Language) is predominantly used in the Indian subcontinent. It is used by at least 7 million deaf signers.

The model takes a sentence(text) as input and displays an ISL representative video of the sentence, keeping in mind all the rules and grammar of ISL.

This model has been implemented by using two different parsers. ISL benepar.py uses benepar parser.
The goal is to help the deaf community by giving them resources by using which they don't feel inferior and get facilities so they can unleash their full potential and their disability be no more the obstacle between them and their dreams.

## Dataset
The videos of the dataset were downloaded from https://indiansignlanguage.org/ and then processed to make the final dataset. Currently, our dataset consists of more than 300 words.

## Features

• It's first of it's kind which uses real persons instead of animations in displayed video.

• Can process voice both with internet and without internet.

• Uses synonyms of words, which are selected manually, so that if any word is used outside of dataset but has a word similar to it in our dataset, then it will be replaced by the word similar to it present in our dataset.

• If any word or a word similar to it is not present in our dataset, then it's letter by letter representation is displayed.

• The model keeps all rules of ISL grammar in mind while conversion of a sentence from english to it's ISL representation.

• Can handle short forms and contractions of words too.

## Screenshots

### Homepage
![homepage snap](https://github.com/Vikas-ML/ISL/blob/main/Screenshots/front.png)

### Input
![InputSection snap](https://github.com/Vikas-ML/ISL/blob/main/Screenshots/input.png)

### Output
![OutputSection snap](https://github.com/Vikas-ML/ISL/blob/main/Screenshots/output.png)

## Future plans and Corrections
• To make dataset with 1-2 persons to maintain the consistency of output video.

• Make it's vice versa, i.e. indian sign language to text.

• To add SIGML animation too as an option

• Implement parallel processing so that as soon as someone keeps on speaking, it keeps on converting that to sign language sentence by sentence, until the person stops so that we can use it in real life like in schools and colleges, seminars, videos with deaf translation and many more.

##  <img alt="handwavegif" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/folded-hands_1f64f.png" width='40' align="left"/>Thank_You
