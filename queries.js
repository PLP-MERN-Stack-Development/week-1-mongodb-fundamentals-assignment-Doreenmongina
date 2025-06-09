//Task 1: MongoDB Setup
use plp_bookstore;

db.books;
db.books.insertMany([
    {
        title: "Blossoms of the Savannah",
        author: "Henry Ole Kulet",
        genre: "Fiction",
        published_year: 2008,
        price: 500,
        in_stock: true,
        pages: 300,
        publisher: "East African Educational Publishers"
    },
    {
        title: "The River and the Source",
        author: "Margaret A. Ogola",
        genre: "Fiction",
        published_year: 1994,
        price: 400,
        in_stock: true,
        pages: 250,
        publisher: "Heinemann Kenya"
    },
    {
        title: "A Doll's House",
        author: "Henrik Ibsen",
        genre: "Drama",
        published_year: 1879,
        price: 300,
        in_stock: true,
        pages: 100,
        publisher: "Penguin Classics"
    },
    {
        title: "Inheritance",
        author: "David Mulwa",
        genre: "Drama",
        published_year: 2004,
        price: 350,
        in_stock: true,
        pages: 120,
        publisher: "Oxford University Press"
    },
    {
        title: "Caucasian Chalk Circle",
        author: "Bertolt Brecht",
        genre: "Drama",
        published_year: 1944,
        price: 400,
        in_stock: true,
        pages: 150,
        publisher: "Methuen Drama"
    },
    {
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        genre: "Fiction",
        published_year: 1958,
        price: 450,
        in_stock: false,
        pages: 209,
        publisher: "Heinemann"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        published_year: 1925,
        price: 380,
        in_stock: false,
        pages: 180,
        publisher: "Charles Scribner's Sons"
    },
    {
        title: "Macbeth",
        author: "William Shakespeare",
        genre: "Drama",
        published_year: 1606,
        price: 320,
        in_stock: false,
        pages: 104,
        publisher: "Simon & Schuster"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        published_year: 1988,
        price: 500,
        in_stock: false,
        pages: 197,
        publisher: "HarperCollins"
    },
    {
        title: "Dust",
        author: "Yvonne Adhiambo Owuor",
        genre: "Literary Fiction",
        published_year: 2014,
        price: 600,
        in_stock: true,
        pages: 400,
        publisher: "Kwani Trust"
    },
    {
        title: "The Dragonfly Sea",
        author: "Yvonne Adhiambo Owuor",
        genre: "Adventure",
        published_year: 2019,
        price: 700,
        in_stock: true,
        pages: 560,
        publisher: "Knopf"
    },
    {
        title: "Unbowed",
        author: "Wangari Maathai",
        genre: "Autobiography",
        published_year: 2006,
        price: 550,
        in_stock: true,
        pages: 368,
        publisher: "Knopf"
    },
    {
        title: "The Havoc of Choice",
        author: "Wanjiru Koinange",
        genre: "Political Fiction",
        published_year: 2019,
        price: 500,
        in_stock: true,
        pages: 320,
        publisher: "Paivapo"
    },
    {
        title: "After 4:30",
        author: "Mukoma wa Ngugi",
        genre: "Crime",
        published_year: 2011,
        price: 480,
        in_stock: true,
        pages: 210,
        publisher: "East African Educational Publishers"
    },
    {
        title: "The Shadow King",
        author: "Maaza Mengiste",
        genre: "Historical Fiction",
        published_year: 2019,
        price: 650,
        in_stock: false,
        pages: 428,
        publisher: "W. W. Norton & Company"
    },
    {
        title: "Beneath the Lion's Gaze",
        author: "Maaza Mengiste",
        genre: "Drama",
        published_year: 2010,
        price: 520,
        in_stock: false,
        pages: 336,
        publisher: "Jonathan Cape"
    },
    {
        title: "Kintu",
        author: "Jennifer Nansubuga Makumbi",
        genre: "Epic",
        published_year: 2014,
        price: 600,
        in_stock: false,
        pages: 446,
        publisher: "Kwani Trust"
    },
    {
        title: "The First Woman",
        author: "Jennifer Nansubuga Makumbi",
        genre: "Coming-of-age",
        published_year: 2020,
        price: 700,
        in_stock: false,
        pages: 432,
        publisher: "Oneworld Publications"
    },
    {
        title: "A Girl Called Problem",
        author: "Katie Quirk",
        genre: "Young Adult",
        published_year: 2013,
        price: 400,
        in_stock: false,
        pages: 288,
        publisher: "Eerdmans Books for Young Readers"
    }
]);
//Task 2: Basic CRUD Operations
// Queries regarding books from the database

db.books.find({ genre:  "Fiction" })
db.books.find({published_year: {$gt: 2000}})
db.books.find({author: "Yvonne Adhiambo Owuor"})
db.books.updateOne(
    {title: "Dust", price: 400},
    {$set: {price: 650} }
)
db.books.deleteOne(
    {title: "The Shadow King"}
);

// Task 3: Advanced Queries

db.books.find({
    in_stock: true,
    published_year: {$gt: 2010}
});

db.books.find({}, {
    title: 1,
    author: 1,
    price: 1
});

db.books.find({}, {
    price: 1
}).sort({ price: -1 });

// Pagination 1
db.books.find().skip(0).limit(5);

// Pagination 2
db.books.find().skip(5).limit(5);

// Indexing

db.books.createIndex({ title: 1 });

db.books.createIndex(
    { author: 1 ,
    publisher: 1 }
);

db.books.find({ title: "Dust" }).explain("executionStats");
db.books.find({ author: "Yvonne Adhiambo Owuor", publisher: "Kwani Trust" }).explain("executionStats");
