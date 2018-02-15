interface INode {
	left: INode,
	right: INode,
	value: number
}

class Node {
	
	constructor(left: INode, right: INode, value: number) {
		this.left = left;
		this.right = right;
		this.value = value;
	}
	
	get left(): INode {
		return this.left;
	}
	
	get right(): INode {
		return this.right;
	}
	
	get value(): number {
		return this.value;
	}
	
	findNode(root: INode, val: number): INode {
		// base case
		if (root === null) {
			return null;
		}
		if (root.value === val) {
			return root;
		}
		if (root.value < val) {
			return findNode(root.right, val);
		} else { // root.value > val -- we are assuming here that this tree has no duplicate values
			return findNode(root.left, val);
		}
	}
}
