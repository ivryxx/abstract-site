class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        const findBoard = this.boards.find((item) => item.boardName === board.boardName);

        if (findBoard === undefined) {
            this.boards.push(board);
            board.status = true;
        } else {
            throw true;
        }
    }

    findBoardByName(boardName) {
        const result = new Board();

        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].boardName === boardName) {
                Object.assign(result, this.boards[i]);
            }
        }
        return result;
    }
}

class Board extends Site {
    constructor(boardName) {
        super();
        this.boardName = boardName;

        if (this.boardName === '' || this.boardName === null) {
            throw new Error('name 데이터가 올바르지 않습니다.');
        }
        this.boardName = boardName;
        this.articles = [];
    }

    publish(article) {
        if (this.status) {
            article.status = true;
            article.id = `${this.boardName}-${Math.random()}`;
            article.createdDate = new Date().toISOString();
            this.articles.push(article);
        } else {
            throw new Error('사용 불가능한 Board입니다.');
        }
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(article) {
        if (
            article.subject === '' ||
            article.subject === null ||
            article.content === '' ||
            article.content === null ||
            article.author === '' ||
            article.author === null
        ) {
            throw new Error();
        }
        this.article = article;
        this.comments = [];
    }

    reply(comment) {
        if (this.status) {
            comment.status = true;
            comment.createdDate = new Date().toISOString();
            this.comments.push(comment);
        } else {
            throw new Error('사용 불가능한 article입니다.');
        }
    }

    getAllComments() {
        return this.comments;
    }
}

class Comment {
    constructor(comment) {
        if (!comment.content || !comment.author) {
            // if (comment.content === '' || comment.content === null || comment.author === '' || comment.author === null) {
            throw new Error();
            // } else if (this.comment === '' || this.comment === null) {
            // throw new Error('Comment는 공백이나 null이 될 수 없습니다.');
        }
        this.comment = comment;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
