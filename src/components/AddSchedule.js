import React from "react";
import { Button, Form, Input, TextArea, Header } from "semantic-ui-react";
import TagsMember from "./TagsMember";

export default function AddSchedule() {
    return (
        <div className="add-schedule">
            <Form>
                <Header as="h1">Add Schedule</Header>
                <Form.Group widths="equal">
                    <Form.Field>
                        <label>From date</label>
                        <Input type="date" />
                    </Form.Field>
                    <Form.Field>
                        <label>To date</label>
                        <Input type="date" />
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                    <label>Event</label>
                    <TextArea />
                </Form.Field>
                <Form.Field>
                    <label>Type</label>
                    <Input list="typeSchedule" placeholder="Choose type..." />
                    <datalist id="typeSchedule">
                        <option value="English" />
                        <option value="Chinese" />
                        <option value="Dutch" />
                    </datalist>
                </Form.Field>
                <Form.Field>
                    <label>Member</label>
                    <TagsMember />
                </Form.Field>
                <Form.Field>
                    <Button type="submit">Add</Button>
                </Form.Field>
            </Form>
        </div>
    );
}
