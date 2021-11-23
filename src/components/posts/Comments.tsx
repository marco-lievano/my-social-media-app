import { CardContent, Collapse, Divider, Typography } from "@mui/material";
import { IComment } from "../../models";
import { Comment } from './Comment';
import { WriteComment } from "./WriteComment";

export interface CommentsProps {
    expanded: boolean;
    comments: IComment[]
}

export const Comments = ({ expanded, comments }: CommentsProps) => {

    return (
        <>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <WriteComment />
                <Divider />
                <CardContent>
                    {comments && comments.map((comment: IComment) => <Comment comment={comment} />)}
                </CardContent>
            </Collapse>
        </>
    );
}