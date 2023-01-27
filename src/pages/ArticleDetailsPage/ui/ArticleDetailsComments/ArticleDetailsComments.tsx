import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import { getArticleComments } from '../../model/slice/ArticleDetailsCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComments = memo((props:ArticleDetailsCommentsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const dispatch = useAppDispatch();
  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Комментарии', { ns: 'articles' })}
      />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList
        comments={comments}
        isLoading={commentsIsLoading}
      />
    </VStack>
  );
});
