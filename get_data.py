from firebase import firebase
from pprint import pprint
def retrieve_data():
	firebaseGet = firebase.FirebaseApplication('https://campusspace.firebaseio.com/', None)
	all_chat_result = firebaseGet.get('', None)

	print "No of result:", len(all_chat_result)
	# print all_chat_result
	# read_lines = 100
	pprint(all_chat_result)
	# for chat_id in all_chat_result:
		# if read_lines < 0:
		# 	break
		# read_lines-=1
		# msg = all_chat_result[chat_id]['message']
		# print "msg here:", msg

def main():
	retrieve_data()

main()