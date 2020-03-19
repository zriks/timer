import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";

export default function TagsMember() {
    const KeyCodes = {
        comma: 188,
        enter: 13
    };

    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    const [tags, setTags] = useState([{ id: "me", text: "me" }]);

    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = tag => {
        setTags([...tags, tag]);
    };

    return (
        <ReactTags
            classNames={{
                tags: "tagsClass",
                selected: "selectedClass",
                tag: "tagClass",
                remove: "removeClass",
            }}
            placeholder={'Add member'}
            tags={tags}
            inline={false}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            allowDragDrop={false}
            delimiters={delimiters}
        />
    );
}
