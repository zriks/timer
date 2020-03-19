import React from "react";
import { WithContext as ReactTags } from "react-tag-input";

export default function TagsMember({ value, onChange }) {
    const KeyCodes = {
        comma: 188,
        enter: 13
    };

    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    const handleDelete = i => {
        onChange({
            target: {
                name: "member",
                value: value.filter((tag, index) => index !== i)
            }
        });
    };

    const handleAddition = tag => {
        onChange({
            target: {
                name: "member",
                value: [...value, tag]
            }
        });
    };

    return (
        <ReactTags
            classNames={{
                tags: "tagsClass",
                selected: "selectedClass",
                tag: "tagClass",
                remove: "removeClass"
            }}
            placeholder={"Add member"}
            tags={value}
            inline={false}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            allowDragDrop={false}
            delimiters={delimiters}
        />
    );
}
