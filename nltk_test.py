import nltk
from nltk import pos_tag
from nltk import word_tokenize
from nltk.corpus import stopwords
stopWords = set(stopwords.words('english'))

import re

# TODO take out words w/out vowels (lose acryonyms)
## TODO create some functions/filters we can implement live to stop spamming / mis-use 


sentence = "this is a random sentence with some nonsense ksdjfhlaskjdhfls... ? ! @"

new_sentence = re.sub('[^A-Za-z0-9\s]+', '', sentence)
print new_sentence

text = word_tokenize(new_sentence)
print nltk.pos_tag(text)

cat_words = nltk.pos_tag(text)
# for i in cat_words:
#     if i[1] == 'DT':
#         cat_words.pop

new_words = []
for i in cat_words:
    if i[0] not in stopWords:
        new_words.append(i)
print new_words


# dont_want = ['DT', '.', 'CC', ':', 'IN']
# for i in new_words:
#     if i[1] in dont_want:
#         new_words.remove(i)
#
# print new_words
