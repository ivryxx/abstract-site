/*
class Site{} 상태로 클래스가 만들어져 있어도 index.spec.js에서 객체 선언해도 상관없음 에러는 안남
하지만 객체를 생성할때 어떠한 파라미터을 넘겨도 Site {} 상태로 만들어짐
그래서 특정한 값들로 객체를 구성해주는 constructor(){} 생성
객체를 구성하는 값을 세팅해주는 함수(정확한 개념은 다시한번 찾아봐야할듯)
//
*/

class Site {
    constructor() {
        this.boards = [];
    }

    /*
        Class Site 객체가 생성될때 만들어진 this.boards 라는 배열에
        파라미터로 넘어온 board를 push 해주는 함수
    */
    addBoard(board) {
        /**
        find 함수 : 배열에 입력한 조건에 해당하는 행을 반환
        this.boards 에 담겨 있는 데이터의 boardName을 체크 해서 
        넘어온 board 의 boardName과 일치하는 데이터가 존재하면 throw true 에러를 반환
        존재하지 않는다면 this.board에 넘어온 board를 push
        */
        const findBoard = this.boards.find((item) => item.boardName === board.boardName);

        // for(var i = 0; i<this.boards.length;i++){
        //     var item = this.boards[i];
        //     if(item.boardName == board.boardName){
        //         return item;
        //     }
        // }

        if (findBoard == undefined) {
            this.boards.push(board);
        } else {
            throw true;
        }
    }

    /**
     addBoard(board) 함수를 통하여 this.boards 배열에 push되어진
     board 내용들 중에 boardName이 일치하는 board를 반환
     */
    findBoardByName(boardName) {
        // 1번 방식

        // addBoard() 함수에서 사용된 find 함수를 이용하여 일치하는 boardName을 찾아서 반환
        // const findBoard = this.boards.find(item => item.boardName === board.boardName);
        // return findBoard;

        // 2번 방식

        /*
        Site = Site {boards :[{ boardName: '공지사항' },{ boardName: 'TEST' },{ boardName: 'ABC' }]} ;
        */

        // 반환 되어질 Board객체 (그냥 null로 선언되어져도 상관x) Class Site 안에서도 Class Board객체를 선언가능 한거 확인
        const result = new Board();
        // this.boards 만큼 for 문이 돌며 boardName 이 일치하는 board가 존재 한다면
        // result 에 값을 넘어줌
        // Object 형태의 데이터는  result = this.boards[i] 식으로 데이터를 넣어줄수가 없음
        // 그래서 Object.assign(A , B) 를 이용 A를  B 데이터로 변경(타입까지 맞춰서 변경해줌)
        // Object.assign(A,[]) 이런식으로 배열,문자,정수 형태의 값도 사용가능 deepCopy()
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].boardName == boardName) {
                Object.assign(result, this.boards[i]);
            }
        }
        return result;
    }
}

class Board {
    constructor(boardName) {
        this.boardName = boardName;
    }
}

class Article {}

class Comment {}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
