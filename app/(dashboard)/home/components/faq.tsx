import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger>
          Berapa banyak penghasilan yang bisa didapat dari Trakteer?
        </AccordionTrigger>
        <AccordionContent>
          Kamu bisa mulai dapat dukungan di Trakteer, ngga peduli berapapun
          banyaknya jumlah follower, subscriber atau audiens kamu. Ngga sedikit
          kreator yang dapet gaji pertama dalam hidup mereka di Trakteer.
          Bahkan, beberapa kreator bisa dapet puluhan hingga ratusan juta rupiah
          dalam satu bulan!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>
          Siapa yang bisa menggunakan Trakteer?
        </AccordionTrigger>
        <AccordionContent>
          Trakteer dapat digunakan oleh siapapun, terlepas dari apapun jenis dan
          bentuk karyanya, selama tidak melanggar hukum yang berlaku di
          Indonesia.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
