import React, { useState } from "react";
import { Button, Form, Input, TextArea, Header } from "semantic-ui-react";
import TagsMember from "./TagsMember";

export default function AddSchedule() {
    const [input, setInput] = useState({
        fromDate: "",
        toDate: "",
        event: "",
        type: "",
        member: [{id: "me", text: "me"}]
    });

    const handleInputChange = e =>
        setInput({ ...input, [e.target.name]: e.target.value });

    return (
        <div className="add-schedule">
            <Form>
                <Header as="h1">ADD SCHEDULE</Header>
                <Form.Group widths="equal">
                    <Form.Field>
                        <label>From date</label>
                        <Input
                            require={true}
                            type="datetime-local"
                            name="fromDate"
                            onChange={handleInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>To date</label>
                        <Input
                            require={true}
                            type="datetime-local"
                            name="toDate"
                            onChange={handleInputChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                    <label>Event</label>
                    <TextArea
                        require={true}
                        name="event"
                        onChange={handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Type</label>
                    <Input
                        require={true}
                        list="typeSchedule"
                        placeholder="Choose type..."
                        name="type"
                        onChange={handleInputChange}
                    />
                    <datalist id="typeSchedule">
                        <option value="English" />
                        <option value="Chinese" />
                        <option value="Dutch" />
                    </datalist>
                </Form.Field>
                <Form.Field>
                    <label>Member</label>
                    <TagsMember
                        name="member"
                        value={input.member}
                        onChange={handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Button type="submit">Add</Button>
                </Form.Field>
            </Form>
        </div>
    );
}
