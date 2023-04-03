import { Link, Text } from '@chakra-ui/react';
import React from 'react';

const Paragraph = ({ text }) => {
  const paragraphs = text.split('\n\n');
  const urlParagraph = (paragraph) => paragraph.match(/\bwww\.\S+/);
  return (
    <>
      {paragraphs.map((paragraph, index) => {
        const lines = paragraph.split('\n');
        return (
          <Text key={index}>
            {lines.map((line, i) => {
              const urlParagraphToSplit = urlParagraph(line);
              if (urlParagraphToSplit) {
                const parts = line.split('www.');
                const url = `www.${parts[1]}`;
                const before = parts[0];
                const after = parts.slice(2).join('');
                return (
                  <React.Fragment key={i}>
                    {before}
                    <Link color={'blue.500'} href={`http://${url}`}>
                      {url}
                    </Link>
                    {after}
                    {i !== lines.length - 1 && <br />}{' '}
                  </React.Fragment>
                );
              }
              return (
                <React.Fragment key={i}>
                  {line}
                  {i !== lines.length - 1 && <br />}{' '}
                </React.Fragment>
              );
            })}
          </Text>
        );
      })}
    </>
  );
};

export default Paragraph;
