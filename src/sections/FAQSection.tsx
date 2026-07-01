import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Container,
  Section,
} from '../ui'
import SectionHeading from '../components/SectionHeading'
import { faqs } from '../data/content'

export default function FAQSection() {
  return (
    <div className="border-t border-border">
      <Section>
        <Container>
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />
          <div className="mt-10 max-w-3xl">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={String(i)}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Section>
    </div>
  )
}
