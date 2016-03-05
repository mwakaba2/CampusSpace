import json
fout = open("./data/json-data.json", 'w+')

users = []
out_data = {}
out_data['college'] = ['LAS', 'ENGR']
out_data['semester'] = [2]
out_data['transportation'] = ['bike', 'skates']
out_data['house'] = [(1,3),(5,7)]
# out_data['label'] = []
out_data['labeling'] = [
	{
	'coord': [(1,1),(2,4)],
	'label': 'Siebel'
	},
	{
	'coord': [(3,3), [4,4]],
	'label': 'Union'
	}
]
users.append(out_data)
out_data = {}
out_data['college'] = ['ACES', 'LAW']
out_data['semester'] = [5]
out_data['transportation'] = ['car']
out_data['house'] = [(4,4),(5,5)]
# out_data['label'] = []
out_data['labeling'] = [
	{
	'coord': [(1,2),(2,4)],
	'label': 'Siebel'
	},
	{
	'coord': [(3,3),(5,5)],
	'label': 'Union'
	},
	{
	'coord': [(6,5),(8,8)],
	'label': 'Union'
	}
]
users.append(out_data)
json.dump(users, fout)


