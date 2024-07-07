import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = [
	{
		question: "Question text goes here",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utvitae lectus eget elit pretium bibendum. Suspendisse malesuadaconsequat nisi vitae fermentum. In hac habitasse platea dictumst. Sed mi sapien, laoreet ultrices sapien eu, laoreet egestas libero. Proin vestibulum dolor vel magna lobortis dictum.",
	},
	{
		question: "Question text goes here",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utvitae lectus eget elit pretium bibendum. Suspendisse malesuadaconsequat nisi vitae fermentum. In hac habitasse platea dictumst. Sed mi sapien, laoreet ultrices sapien eu, laoreet egestas libero. Proin vestibulum dolor vel magna lobortis dictum.",
	},
	{
		question: "Question text goes here",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utvitae lectus eget elit pretium bibendum. Suspendisse malesuadaconsequat nisi vitae fermentum. In hac habitasse platea dictumst. Sed mi sapien, laoreet ultrices sapien eu, laoreet egestas libero. Proin vestibulum dolor vel magna lobortis dictum.",
	},
	{
		question: "Question text goes here",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utvitae lectus eget elit pretium bibendum. Suspendisse malesuadaconsequat nisi vitae fermentum. In hac habitasse platea dictumst. Sed mi sapien, laoreet ultrices sapien eu, laoreet egestas libero. Proin vestibulum dolor vel magna lobortis dictum.",
	},
	{
		question: "Question text goes here",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utvitae lectus eget elit pretium bibendum. Suspendisse malesuadaconsequat nisi vitae fermentum. In hac habitasse platea dictumst. Sed mi sapien, laoreet ultrices sapien eu, laoreet egestas libero. Proin vestibulum dolor vel magna lobortis dictum.",
	},
	{
		question: "Question text goes here",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utvitae lectus eget elit pretium bibendum. Suspendisse malesuadaconsequat nisi vitae fermentum. In hac habitasse platea dictumst. Sed mi sapien, laoreet ultrices sapien eu, laoreet egestas libero. Proin vestibulum dolor vel magna lobortis dictum.",
	},
	{
		question: "Question text goes here",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utvitae lectus eget elit pretium bibendum. Suspendisse malesuadaconsequat nisi vitae fermentum. In hac habitasse platea dictumst. Sed mi sapien, laoreet ultrices sapien eu, laoreet egestas libero. Proin vestibulum dolor vel magna lobortis dictum.",
	},
	{
		question: "Question text goes here",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utvitae lectus eget elit pretium bibendum. Suspendisse malesuadaconsequat nisi vitae fermentum. In hac habitasse platea dictumst. Sed mi sapien, laoreet ultrices sapien eu, laoreet egestas libero. Proin vestibulum dolor vel magna lobortis dictum.",
	},
	{
		question: "Question text goes here",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utvitae lectus eget elit pretium bibendum. Suspendisse malesuadaconsequat nisi vitae fermentum. In hac habitasse platea dictumst. Sed mi sapien, laoreet ultrices sapien eu, laoreet egestas libero. Proin vestibulum dolor vel magna lobortis dictum.",
	},
	{
		question: "Question text goes here",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utvitae lectus eget elit pretium bibendum. Suspendisse malesuadaconsequat nisi vitae fermentum. In hac habitasse platea dictumst. Sed mi sapien, laoreet ultrices sapien eu, laoreet egestas libero. Proin vestibulum dolor vel magna lobortis dictum.",
	},
];

export default function AccordionDemo() {
	return (
		<div className='container px-4 space-y-5 py-10'>
			<div>
				<p className='font-semibold text-[20px] '>Frequently Asked Questions</p>
			</div>
			<Accordion
				type='single'
				collapsible
				className='w-full divide-y divide-black border-b border-b-black border-t-black border-t'>
				{FAQs.map((data, index) => (
					<AccordionItem key={index} value={`item-${index}`}>
						<AccordionTrigger className='font-normal'>
							{data.question}
						</AccordionTrigger>
						<AccordionContent className='text-[#475467] text-[12px] before:left-0 before:w-[2px] before:top-[3px] before:bottom-[24px] pl-3 before:bg-accent-300  relative before:absolute'>
							{data.answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
