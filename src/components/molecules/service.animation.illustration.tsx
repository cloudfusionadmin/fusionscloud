import Image from 'next/image';
import { Text } from 'rizzui';

import { ArrowAnimated } from '@/components/atoms/icons/landing/service/arrow-animated';
import { AudioFileIcon } from '@/components/atoms/icons/landing/service/audio-file-icon';
/* import { CircleStrokeAnimation } from '@/components/atoms/icons/landing/service/circle-stroke/circle-stroke-animation'; */
import { DocumentIconCyan } from '@/components/atoms/icons/landing/service/document-icon-cyan';
import { DocumentIconPastelPink } from '@/components/atoms/icons/landing/service/document-icon-pastel-pink';
import { DocumentIconRed } from '@/components/atoms/icons/landing/service/document-icon-red';
import { DocumentIconYellow } from '@/components/atoms/icons/landing/service/document-icon-yellow';
import { ImageFileIcon } from '@/components/atoms/icons/landing/service/image-file-icon';
import { Mp4FileIcon } from '@/components/atoms/icons/landing/service/mp4-file-icon';
import { PdfFileIcon } from '@/components/atoms/icons/landing/service/pdf-file-icon';
/* import { SettingIcon } from '@/components/atoms/icons/landing/service/setting-icon'; */
import { Box } from '@/components/atoms/layout';

export function ServiceAnimationIllustration() {
  return (
    <Box className="[aspect:737/675] select-none pointer-events-none relative w-full max-w-[500px] xl:max-w-[720px]">
      <Image
        src="/assets/service/service-illustrations.webp"
        alt="service illustration"
        className="w-full h-auto"
        width={737 * 3}
        height={675 * 3}
        loading="lazy"
      />
      <Box className="absolute service-animated-illustration right-[22%] w-[52.5%] top-[25%] h-[26%] overflow-hidden">
        <Box className="w-full top-[8%] left-0 absolute aspect-square rounded-full animate-rotation-clockwise">
          <Text
            as="span"
            className="w-[21.15%] absolute top-0 left-1/2 -translate-x-1/2 document-1"
          >
            <DocumentIconYellow className="h-auto w-full animate-rotation-anticlockwise" />
          </Text>
          <Text
            as="span"
            className="w-[21.15%] absolute top-[12.5%] right-[12.5%] document-2"
          >
            <PdfFileIcon className="h-auto w-full animate-rotation-anticlockwise" />
          </Text>
          <Text
            as="span"
            className="w-[21.15%] absolute top-1/2 right-0 -translate-y-1/2 document-3"
          >
            <DocumentIconCyan className="h-auto w-full animate-rotation-anticlockwise" />
          </Text>
          <Text
            as="span"
            className="w-[21.15%] absolute bottom-[12.5%] right-[12.5%] document-4"
          >
            <ImageFileIcon className="h-auto w-full animate-rotation-anticlockwise" />
          </Text>
          <Text
            as="span"
            className="w-[21.15%] absolute bottom-0 left-1/2 -translate-x-1/2 document-5"
          >
            <DocumentIconRed className="h-auto w-full animate-rotation-anticlockwise" />
          </Text>
          <Text
            as="span"
            className="w-[21.15%] absolute bottom-[12.5%] left-[12.5%] document-6"
          >
            <Mp4FileIcon className="h-auto w-full animate-rotation-anticlockwise" />
          </Text>
          <Text
            as="span"
            className="w-[21.15%] absolute top-1/2 left-0 -translate-y-1/2 document-7"
          >
            <DocumentIconPastelPink className="h-auto w-full animate-rotation-anticlockwise" />
          </Text>
          <Text
            as="span"
            className="w-[21.15%] absolute top-[12.5%] left-[12.5%] document-8"
          >
            <AudioFileIcon className="h-auto w-full animate-rotation-anticlockwise" />
          </Text>
        </Box>
      </Box>
      <Box className="absolute z-10 right-[23%] w-[52.5%] bottom-[38%] flex justify-between items-end">
        <Image
          src="/assets/service/upload-files.webp"
          alt="upload file"
          width={173}
          height={163}
          className="w-[40%] h-auto aspect-[173.48/163.34]"
        />
        <Image
          src="/assets/service/downloads-file.webp"
          alt="upload file"
          width={173}
          height={163}
          className="right-[22%] w-[40%] h-auto aspect-[173.48/163.34]"
        />
        <Text
          as="span"
          className="bg-white w-[1.8%] h-[5%] rounded-full absolute bottom-[8%] right-[65%]"
        />
        <Text
          as="span"
          className="bg-white w-[1.8%] h-[5%] rounded-full absolute bottom-[8%] right-[65%] animate-ping"
        />
        <Text
          as="span"
          className="bg-green w-[1.8%] h-[5%] rounded-full absolute bottom-[8%] right-[3%]"
        />
        <Text
          as="span"
          className="bg-green w-[1.8%] h-[5%] rounded-full absolute bottom-[8%] right-[3%] animate-ping"
        />
        <ArrowAnimated
          direction="up"
          className="absolute w-[11%] left-[17%] bottom-[10%]"
        />
        <ArrowAnimated
          direction="down"
          className="absolute w-[11%] right-[10.5%] bottom-[10%]"
        />
      </Box>
    </Box>
  );
}
