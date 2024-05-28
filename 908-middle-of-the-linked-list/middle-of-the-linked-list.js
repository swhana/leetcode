/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let total = 0, cnt = 0;
    let temp = head;
    
    //전체 노드 수 세기
    while(head) {
        head = head.next;
        total++;
    }

    while(temp) {
        if(cnt == Math.floor((total) / 2)) break;
        temp = temp.next;
        cnt++;
    }

    console.log(total, cnt)
    return temp;
};