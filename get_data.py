from firebase import firebase
from pprint import pprint

import json


def retrieve_data(show_data):
	firebaseGet = firebase.FirebaseApplication('https://campusspace.firebaseio.com/', None)
	all_chat_result = firebaseGet.get('', None)

	print "No of result:", len(all_chat_result)
	# print all_chat_result
	# read_lines = 100
	if show_data:
		for key in all_chat_result:
			pprint(all_chat_result[key])

	return all_chat_result

def main():
	fout = open("./data/retrieved_data.json", 'w+')
	jdata = retrieve_data(show_data = False)
	json.dump(jdata, fout)

main()