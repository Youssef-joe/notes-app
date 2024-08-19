const Notes = require('./../models/noteModel');
const responseMsg = require('./../utilities/responseMsg');

let addNewNote = async (req, res) => {
    try {
        const { title, content, tags } = req.body;

        if (!req.user || !req.user.id) {
            return res.status(401).json({
                error: true,
                message: "Unauthorized"
            });
        }

        const userId = req.user.id;

        if (!title) {
            return res.status(400).json({
                error: true,
                message: "Title is required"
            });
        }

        if (!content) {
            return res.status(400).json({
                error: true,
                message: "Content is required"
            });
        }

        if (!tags) {
            return res.status(400).json({
                error: true,
                message: "Tags are required"
            });
        }

        const note = new Notes({
            title,
            content,
            tags: tags || [],
            userId: userId
        });
        await note.save();

        return res.status(200).json({
            error: false,
            data: note,
            message: "Note added successfully"
        });

    } catch (er) {
        console.log(er);
        return res.status(500).json({
            error: true,
            message: "Internal server error"
        });
    }
};

module.exports = {
    addNewNote
};
